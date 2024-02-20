import { OrbitControls, Stars } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { TextureLoader } from "three";
import React, { useRef } from "react";

function Box(props) {
  const meshRef = useRef();

  useFrame((state, delta) => (meshRef.current.rotation.x += delta));

  return (
    <mesh {...props} ref={meshRef}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="orange" />
    </mesh>
  );
}

function Sun(props) {
  const meshRef = useRef();

  useFrame((state, delta) => (meshRef.current.rotation.y += delta));

  return (
    <mesh {...props} ref={meshRef}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial map={new TextureLoader().load("/suntexture.png")} />
      {props.children}
    </mesh>
  );
}

function Earth(props) {
  const meshRef = useRef();

  useFrame((state, delta) => {
    meshRef.current.position.x = Math.cos(state.clock.getElapsedTime()) * 3; // Orbit along the x-axis
    meshRef.current.position.z = Math.sin(state.clock.getElapsedTime()) * 3; // Orbit along the z-axis
  });

  return (
    <mesh {...props} ref={meshRef}>
      <sphereGeometry args={[0.4, 32, 32]} />
      <meshStandardMaterial map={new TextureLoader().load("/earthtexture.jpg")} />
      {props.children}
    </mesh>
  );
}

function Moon(props) {
  const meshRef = useRef();

  useFrame((state, delta) => {
    meshRef.current.position.x = Math.cos(state.clock.getElapsedTime() * 2) * 0.5; // Orbit along the x-axis
    meshRef.current.position.z = Math.sin(state.clock.getElapsedTime() * 2) * 0.5; // Orbit along the z-axis
  });

  return (
    <mesh {...props} ref={meshRef}>
      <sphereGeometry args={[0.2, 32, 32]} />
      <meshStandardMaterial map={new TextureLoader().load("/moontexture.jpg")} />
    </mesh>
  );
}

const RandomCanvas = () => {
  return (
    <div className="py-10 min-h-screen bg-slate-800">
      <Canvas style={{ height: "100vh" }}>
        <ambientLight intensity={Math.PI / 2} />
        <spotLight
          position={[10, 10, 10]}
          angle={0.15}
          penumbra={1}
          decay={0}
          intensity={Math.PI}
        />
        <Stars />
        <OrbitControls />
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 15, 10]} angle={0.3} />
        <Sun position={[0, 0, 0]}>
          <Earth position={[3, 0, 0]}>
            <Moon position={[0, 0, 0]} />
          </Earth>
        </Sun>
      </Canvas>
    </div>
  );
};

export default RandomCanvas;
