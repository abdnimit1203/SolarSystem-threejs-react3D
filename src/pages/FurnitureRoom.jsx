import React, { useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";

import Chair from "../components/Page3D/3DComponents/Chair";
import Room from "../components/Page3D/3DComponents/Room";

const MyScene = () => {
  const chairRef = useRef();
  const roomRef = useRef();

  const [dragging, setDragging] = useState(false);
  const [roomRotation, setRoomRotation] = useState(true);
  console.log(dragging);

  const rotateChair = () => {
    setRoomRotation(!roomRotation)
    console.log("Stopped")
  };

  const rotateRoom = () => {
    if (roomRef.current) {
      roomRef.current.rotation.y += Math.PI / 2; // Rotate the room by 90 degrees around the y-axis
    }
  };

  return (
    <div className="py-10 min-h-screen bg-lime-100">
      
      <button className={`btn mt-20 mr-3 text-white font-semibold ${roomRotation? "btn-success" : "btn-error"}`} onClick={rotateChair}>
        {
          roomRotation?"Room Rotation: Enabled":"Room Rotation: Disabled "
        }
        
      </button>
      <button className="btn mt-20 btn-accent" onClick={rotateRoom}>
        Rotate Room 90 degree
      </button>
      <Canvas style={{ height: "100vh" }}>
        <PerspectiveCamera makeDefault position={[0, 5, 10]} />
        <OrbitControls enableRotate={roomRotation} />
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Room  ref={roomRef}>
          <Chair ref={chairRef} />
        </Room>
      </Canvas>
    </div>
  );
};

export default MyScene;
