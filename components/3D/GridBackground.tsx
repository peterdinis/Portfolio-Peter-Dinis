"use client";

import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

export const GridBackground = () => {
	const gridRef = useRef<THREE.LineSegments>(null);

	const gridGeometry = useMemo(() => {
		const geometry = new THREE.BufferGeometry();
		const vertices = [];
		const size = 20;
		const divisions = 20;

		for (let i = 0; i <= divisions; i++) {
			const v = (i / divisions) * size - size / 2;
			vertices.push(-size / 2, 0, v, size / 2, 0, v);
			vertices.push(v, 0, -size / 2, v, 0, size / 2);
		}

		geometry.setAttribute(
			"position",
			new THREE.Float32BufferAttribute(vertices, 3),
		);
		return geometry;
	}, []);

	useFrame((state) => {
		if (gridRef.current) {
			gridRef.current.rotation.x = -Math.PI / 2;
			gridRef.current.position.y = -8;
			const material = gridRef.current.material as THREE.LineBasicMaterial;
			if (material && "opacity" in material) {
				material.opacity = 0.1 + Math.sin(state.clock.elapsedTime * 0.5) * 0.05;
			}
		}
	});

	return (
		<lineSegments ref={gridRef} geometry={gridGeometry}>
			<lineBasicMaterial color="#3b82f6" transparent opacity={0.1} />
		</lineSegments>
	);
};
