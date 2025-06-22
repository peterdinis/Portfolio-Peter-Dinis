"use client";

import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

export const CodeParticles = () => {
	const pointsRef = useRef<THREE.Points>(null);

	const { positions, colors, sizes } = useMemo(() => {
		const count = 150;
		const positions = new Float32Array(count * 3);
		const colors = new Float32Array(count * 3);
		const sizes = new Float32Array(count);

		const colorPalette = [
			new THREE.Color("#3b82f6"),
			new THREE.Color("#10b981"),
			new THREE.Color("#f59e0b"),
			new THREE.Color("#ef4444"),
			new THREE.Color("#8b5cf6"),
			new THREE.Color("#06b6d4"),
		];

		for (let i = 0; i < count; i++) {
			positions[i * 3] = (Math.random() - 0.5) * 25;
			positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
			positions[i * 3 + 2] = (Math.random() - 0.5) * 25;

			const color =
				colorPalette[Math.floor(Math.random() * colorPalette.length)];
			colors[i * 3] = color.r;
			colors[i * 3 + 1] = color.g;
			colors[i * 3 + 2] = color.b;

			sizes[i] = Math.random() * 0.1 + 0.05;
		}

		return { positions, colors, sizes };
	}, []);

	useFrame((state) => {
		if (pointsRef.current) {
			pointsRef.current.rotation.y += 0.001;
			pointsRef.current.rotation.x =
				Math.sin(state.clock.elapsedTime * 0.1) * 0.05;
		}
	});

	return (
		<points ref={pointsRef}>
			<bufferGeometry>
				<bufferAttribute
					attach="attributes-position"
					count={positions.length / 3}
					array={positions}
					itemSize={3}
					args={[positions, 3]}
				/>
				<bufferAttribute
					attach="attributes-color"
					count={colors.length / 3}
					array={colors}
					itemSize={3}
					args={[colors, 3]}
				/>
				<bufferAttribute
					attach="attributes-size"
					count={sizes.length}
					array={sizes}
					itemSize={1}
					args={[sizes, 1]}
				/>
			</bufferGeometry>
			<pointsMaterial
				size={0.08}
				vertexColors
				transparent
				opacity={0.8}
				sizeAttenuation
				blending={THREE.AdditiveBlending}
			/>
		</points>
	);
};
