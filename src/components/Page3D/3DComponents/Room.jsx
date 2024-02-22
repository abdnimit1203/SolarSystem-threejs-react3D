import React from "react";
import { useGLTF } from "@react-three/drei";

const Room = ({ children }) => {
  const { scene } = useGLTF("/room.glb");

  return (
    <group>
      <primitive object={scene}  />
      {children}
    </group>
  );
};

export default Room;
