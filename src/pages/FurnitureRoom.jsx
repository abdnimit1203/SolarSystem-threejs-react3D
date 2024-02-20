import React, { useRef } from "react";
import { OrbitControls, PerspectiveCamera, useGLTF } from "@react-three/drei";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
// import { useDrag } from "react-use-gesture";
// import { useSpring, a } from "react-spring";
// import FurnitureChair from "../components/Extra/FurnitureChair";
// import Chair3D from "../components/Extra/Chair3D";
// const Furniture = ({ position }) => {
//   const gltf = useGLTF("/kitchen.gltf", true);
//   const group = useRef();

 

  

//   return (
 
//       <primitive object={gltf.scene} />

//   );
// };




const Wardrobe = ({ position }) => {
  const gltf = useGLTF("/kitchen.gltf", true);
  const group = useRef();

 

  

  return (
 
      <primitive object={gltf.scene} />

  );
};

const FurnitureRoom = () => {
  return (
    <Canvas style={{ height: "100vh" }} className="bg-blue-900">
      <PerspectiveCamera makeDefault position={[0, 5, 10]} />
      <Suspense fallback={null}>
        <OrbitControls enableRotate={true} enableZoom={true}/>
        <ambientLight intensity={0.9} />
      
        <RoomModel position={[0,0,0]}/>
        {/* <FurnitureChair/> */}
        {/* <Wardrobe position={[0, 0, 0]} /> */}
        {/* <Chair3D/> */}
      </Suspense>
    </Canvas>
  );
};

const RoomModel = () => {
  const gltf = useGLTF("/kitchen.gltf", true);
  return <primitive object={gltf.scene} rotation={[0, 3.2, 0]} />;
};

export default FurnitureRoom;