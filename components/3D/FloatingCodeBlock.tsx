"use client";

import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import type * as THREE from "three";

export const FloatingCodeBlock = ({
	position,
	rotation,
	color,
	size = 1,
}: {
	position: [number, number, number];
	rotation: [number, number, number];
	text: string;
	color: string;
	size?: number;
}) => {
	const meshRef = useRef<THREE.Mesh>(null);
	const outlineRef = useRef<THREE.Mesh>(null);

	useFrame((state) => {
		if (meshRef.current && outlineRef.current) {
			const time = state.clock.elapsedTime;
			meshRef.current.rotation.y = rotation[1] + Math.sin(time * 0.5) * 0.3;
			meshRef.current.rotation.x = rotation[0] + Math.cos(time * 0.3) * 0.2;
			meshRef.current.position.y =
				position[1] + Math.sin(time * 0.8 + position[0]) * 0.5;
			outlineRef.current.rotation.copy(meshRef.current.rotation);
			outlineRef.current.position.copy(meshRef.current.position);
		}
	});

	return (
		<group>
			<mesh ref={outlineRef} position={position}>
				<boxGeometry
					args={[2 * size + 0.1, 1 * size + 0.1, 0.2 * size + 0.1]}
				/>
				<meshBasicMaterial color={color} transparent opacity={0.3} />
			</mesh>
			<mesh ref={meshRef} position={position} rotation={rotation}>
				<boxGeometry args={[2 * size, 1 * size, 0.2 * size]} />
				<meshStandardMaterial
					color={color}
					transparent
					opacity={0.8}
					roughness={0.3}
					metalness={0.4}
					emissive={color}
					emissiveIntensity={0.1}
				/>
			</mesh>
		</group>
	);
};
