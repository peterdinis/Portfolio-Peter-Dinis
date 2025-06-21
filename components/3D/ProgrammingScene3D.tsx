"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";
import { FloatingCodeBlock } from "./FloatingCodeBlock";
import { ProgrammingSymbol } from "./ProgrammingSymbol";

const CodeParticles = () => {
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

const GridBackground = () => {
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

export const ProgrammingScene3D = () => {
	const codeBlocks = [
		{
			position: [-4, 2, -3] as [number, number, number],
			rotation: [0.2, 0.3, 0] as [number, number, number],
			text: "React",
			color: "#61dafb",
			size: 1.2,
		},
		{
			position: [3, -1, 2] as [number, number, number],
			rotation: [-0.1, -0.2, 0.1] as [number, number, number],
			text: "TypeScript",
			color: "#3178c6",
			size: 1.0,
		},
		{
			position: [0, 3, -2] as [number, number, number],
			rotation: [0.3, -0.1, 0.2] as [number, number, number],
			text: "Node.js",
			color: "#339933",
			size: 1.1,
		},
		{
			position: [-3, -2, 3] as [number, number, number],
			rotation: [-0.2, 0.4, -0.1] as [number, number, number],
			text: "Python",
			color: "#3776ab",
			size: 0.9,
		},
		{
			position: [4, 1, -1] as [number, number, number],
			rotation: [0.1, 0.2, -0.3] as [number, number, number],
			text: "Docker",
			color: "#2496ed",
			size: 1.0,
		},
		{
			position: [-1, 0, 4] as [number, number, number],
			rotation: [0.4, -0.3, 0.1] as [number, number, number],
			text: "AWS",
			color: "#ff9900",
			size: 0.8,
		},
	];

	const symbols = [
		{
			position: [-5, 1, 0] as [number, number, number],
			symbol: "bracket" as const,
			color: "#10b981",
		},
		{
			position: [5, 2, 1] as [number, number, number],
			symbol: "terminal" as const,
			color: "#f59e0b",
		},
		{
			position: [1, -3, -1] as [number, number, number],
			symbol: "function" as const,
			color: "#ef4444",
		},
		{
			position: [-2, 4, -3] as [number, number, number],
			symbol: "arrow" as const,
			color: "#8b5cf6",
		},
		{
			position: [3, -2, 3] as [number, number, number],
			symbol: "semicolon" as const,
			color: "#06b6d4",
		},
		{
			position: [0, 1, -4] as [number, number, number],
			symbol: "bracket" as const,
			color: "#f97316",
		},
	];

	return (
		<div className="w-full h-[700px] relative">
			<Canvas
				camera={{ position: [0, 2, 10], fov: 60 }}
				gl={{
					antialias: true,
					alpha: true,
					powerPreference: "high-performance",
				}}
			>
				<ambientLight intensity={0.3} color="#4f46e5" />
				<pointLight position={[10, 10, 10]} intensity={1.5} color="#60a5fa" />
				<pointLight position={[-10, -5, 5]} intensity={1} color="#10b981" />
				<pointLight position={[5, -10, -5]} intensity={0.8} color="#f59e0b" />
				<spotLight
					position={[0, 15, 0]}
					angle={0.4}
					penumbra={1}
					intensity={0.8}
					color="#8b5cf6"
					castShadow
				/>

				<GridBackground />

				<CodeParticles />

				{codeBlocks.map((block, index) => (
					<FloatingCodeBlock
						key={`code-${index}`}
						position={block.position}
						rotation={block.rotation}
						text={block.text}
						color={block.color}
						size={block.size}
					/>
				))}

				{symbols.map((symbol, index) => (
					<ProgrammingSymbol
						key={`symbol-${index}`}
						position={symbol.position}
						symbol={symbol.symbol}
						color={symbol.color}
					/>
				))}
			</Canvas>

			<div className="absolute bottom-6 left-6 font-mono text-green-400/80 text-sm space-y-1">
				<div className="flex items-center gap-2">
					<div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
					<span>System online</span>
				</div>
				<div>{"> Rendering 3D environment..."}</div>
				<div className="flex items-center gap-1">
					<span>{"> Ready for interaction"}</span>
					<div className="w-2 h-4 bg-green-400 animate-pulse">█</div>
				</div>
			</div>

			<div className="absolute top-6 right-6 space-y-3">
				<div className="flex items-center gap-3 text-blue-400/80 text-sm font-mono bg-slate-900/20 backdrop-blur-sm px-3 py-2 rounded-lg border border-blue-500/20">
					<div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
					Frontend: React + TypeScript + Nextjs + Tailwind
				</div>
				<div className="flex items-center gap-3 text-green-400/80 text-sm font-mono bg-slate-900/20 backdrop-blur-sm px-3 py-2 rounded-lg border border-green-500/20">
					<div className="w-3 h-3 bg-green-400 rounded-full animate-pulse animation-delay-300"></div>
					Backend: Node.js + Nest.js + C#
				</div>
				<div className="flex items-center gap-3 text-yellow-400/80 text-sm font-mono bg-slate-900/20 backdrop-blur-sm px-3 py-2 rounded-lg border border-yellow-500/20">
					<div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse animation-delay-500"></div>
					Cloud: AWS + Docker + Linux
				</div>
			</div>

			<div className="absolute bottom-6 right-6 text-white/60 text-xs font-mono">
				<div>WebGL: Active</div>
				<div>Objects: {codeBlocks.length + symbols.length + 150}</div>
				<div>Performance: Optimized</div>
			</div>
		</div>
	);
};
