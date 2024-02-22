import React, { useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { Vector2 } from "three";

const Chair = () => {
  const gltf = useGLTF("/chair.glb", true);
  const group = useRef();
  const [isDragging, setIsDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 10, y: 0 });
  const [initialAngle, setInitialAngle] = useState(0);
  const [angle, setAngle] = useState(0);

  const handlePointerDown = (event) => {
    setIsDragging(true);
    const { x, y } = event.point;
    setOffset({ x: group.current.position.x - x, y: group.current.position.y - y });
    setInitialAngle(group.current.rotation.z);
  };

  const handlePointerMove = (event) => {
    if (isDragging) {
      const { x, y } = event.point;
      group.current.position.x = x + offset.x;
      group.current.position.y = y + offset.y;
      
      group.current.rotation.z = angle;
    }
  };

  const handlePointerUp = () => {
    setIsDragging(false);
  };

  return (
    <group ref={group} onPointerDown={handlePointerDown} onPointerMove={handlePointerMove} onPointerUp={handlePointerUp}>
      <primitive object={gltf.scene.clone()} />
    </group>
  );
};

export default Chair;
