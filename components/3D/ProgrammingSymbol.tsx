"use client"

import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

export const ProgrammingSymbol = ({
    position,
    symbol,
    color = "#60a5fa",
}: {
    position: [number, number, number];
    symbol: "bracket" | "semicolon" | "arrow" | "terminal" | "function";
    color?: string;
}) => {
    const meshRef = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        if (meshRef.current) {
            const time = state.clock.elapsedTime;
            meshRef.current.rotation.z = Math.sin(time * 0.4) * 0.3;
            meshRef.current.rotation.y += 0.01;
            meshRef.current.position.y =
                position[1] + Math.sin(time * 0.6 + position[0] * 2) * 0.3;
        }
    });

    const getGeometry = () => {
        switch (symbol) {
            case "bracket":
                return <torusGeometry args={[0.4, 0.15, 8, 16]} />;
            case "semicolon":
                return <sphereGeometry args={[0.2]} />;
            case "arrow":
                return <coneGeometry args={[0.25, 0.8, 6]} />;
            case "terminal":
                return <boxGeometry args={[0.6, 0.4, 0.1]} />;
            case "function":
                return <cylinderGeometry args={[0.15, 0.25, 0.8, 8]} />;
            default:
                return <boxGeometry args={[0.3, 0.3, 0.3]} />;
        }
    };

    return (
        <mesh ref={meshRef} position={position}>
            {getGeometry()}
            <meshStandardMaterial
                color={color}
                transparent
                opacity={0.7}
                roughness={0.2}
                metalness={0.6}
                emissive={color}
                emissiveIntensity={0.2}
            />
        </mesh>
    );
};
