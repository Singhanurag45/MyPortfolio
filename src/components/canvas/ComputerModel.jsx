// src/components/canvas/ComputerModel.jsx

import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload } from "@react-three/drei";

// This is our new placeholder 3D object
const PlaceholderModel = () => {
  const meshRef = useRef();

  // useFrame is a hook that runs on every rendered frame
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.5; // Rotate the cube
      meshRef.current.rotation.x += delta * 0.2;
    }
  });

  return (
    // A mesh is the basic scene object in Three.js. It's composed of a geometry and a material.
    <mesh ref={meshRef}>
      {/* Defines the shape of the object (a box) */}
      <boxGeometry args={[2.5, 2.5, 2.5]} />
      {/* Defines the appearance of the object (how it reacts to light) */}
      <meshStandardMaterial color="#915eff" />
    </mesh>
  );
};

// The Canvas component that renders our placeholder
const ComputerModelCanvas = () => {
  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.75} />

        {/* Render the new placeholder model */}
        <PlaceholderModel />

        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputerModelCanvas;
