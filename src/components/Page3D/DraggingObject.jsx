import * as THREE from 'three';
import React, { useEffect, useRef, useState } from "react";
import { DragControls } from "three/examples/jsm/controls/DragControls";
import { Canvas, useFrame } from "@react-three/fiber";
import { Vector3 } from "three";

const DragControlsExample = () => {
  const containerRef = useRef();
  const [enableSelection, setEnableSelection] = useState(false);
  const [objects, setObjects] = useState([]);
  const [group, setGroup] = useState(new THREE.Group());
  const [renderer, setRenderer] = useState(null);

  useEffect(() => {
    const init = () => {
      const camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.1, 500);
      camera.position.z = 25;

      const scene = new THREE.Scene();
      scene.background = new THREE.Color(0xf0f0f0);
      scene.add(new THREE.AmbientLight(0xaaaaaa));

      const light = new THREE.SpotLight(0xffffff, 10000);
      light.position.set(0, 25, 50);
      light.angle = Math.PI / 9;
      light.castShadow = true;
      light.shadow.camera.near = 10;
      light.shadow.camera.far = 100;
      light.shadow.mapSize.width = 1024;
      light.shadow.mapSize.height = 1024;
      scene.add(light);

      const group = new THREE.Group();
      scene.add(group);
      setGroup(group);

      const newObjects = [];
      const geometry = new THREE.BoxGeometry();
      for (let i = 0; i < 200; i++) {
        const object = new THREE.Mesh(geometry, new THREE.MeshLambertMaterial({ color: Math.random() * 0xffffff }));
        object.position.x = Math.random() * 30 - 15;
        object.position.y = Math.random() * 15 - 7.5;
        object.position.z = Math.random() * 20 - 10;
        object.rotation.x = Math.random() * 2 * Math.PI;
        object.rotation.y = Math.random() * 2 * Math.PI;
        object.rotation.z = Math.random() * 2 * Math.PI;
        object.scale.x = Math.random() * 2 + 1;
        object.scale.y = Math.random() * 2 + 1;
        object.scale.z = Math.random() * 2 + 1;
        object.castShadow = true;
        object.receiveShadow = true;
        scene.add(object);
        newObjects.push(object);
      }
      setObjects(newObjects);

      const newRenderer = new THREE.WebGLRenderer({ antialias: true });
      newRenderer.setPixelRatio(window.devicePixelRatio);
      newRenderer.setSize(window.innerWidth, window.innerHeight);
      newRenderer.shadowMap.enabled = true;
      newRenderer.shadowMap.type = THREE.PCFShadowMap;
      setRenderer(newRenderer);

      containerRef.current.appendChild(newRenderer.domElement);

      const controls = new DragControls(objects, camera, newRenderer.domElement);
      controls.addEventListener("drag", () => newRenderer.render(scene, camera));

      window.addEventListener("resize", onWindowResize);
      document.addEventListener("click", onClick);
      window.addEventListener("keydown", onKeyDown);
      window.addEventListener("keyup", onKeyUp);

      render();

      return () => {
        controls.dispose();
        window.removeEventListener("resize", onWindowResize);
        document.removeEventListener("click", onClick);
        window.removeEventListener("keydown", onKeyDown);
        window.removeEventListener("keyup", onKeyUp);
        newRenderer.dispose();
        scene.dispose();
      };
    };

    init();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const onWindowResize = () => {
    const camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.1, 500);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    render();
  };

  const onKeyDown = (event) => {
    setEnableSelection(event.keyCode === 16);
  };

  const onKeyUp = () => {
    setEnableSelection(false);
  };

  const onClick = (event) => {
    event.preventDefault();

    if (enableSelection) {
      const draggableObjects = controls.getObjects();
      draggableObjects.length = 0;

      const mouse = new THREE.Vector2((event.clientX / window.innerWidth) * 2 - 1, -(event.clientY / window.innerHeight) * 2 + 1);
      const raycaster = new THREE.Raycaster();
      raycaster.setFromCamera(mouse, camera);

      const intersections = raycaster.intersectObjects(objects, true);

      if (intersections.length > 0) {
        const object = intersections[0].object;
        if (group.children.includes(object)) {
          object.material.emissive.set(0x000000);
          scene.attach(object);
        } else {
          object.material.emissive.set(0xaaaaaa);
          group.attach(object);
        }
        controls.transformGroup = true;
        draggableObjects.push(group);
      }

      if (group.children.length === 0) {
        controls.transformGroup = false;
        draggableObjects.push(...objects);
      }
    }
    render();
  };

  const render = () => {
    if (renderer) {
      renderer.render(scene, camera);
    }
  };

  return (
    <div>
      <div id="info" className='bg-red-100'>
        <a href="https://threejs.org" target="_blank" rel="noopener">
          three.js
        </a>{" "}
        webgl - drag controls
        <br />
        Use "Shift+Click" to add/remove objects to/from a group.
        <br />
        Grouped objects can be transformed as a union.
      </div>
      <div ref={containerRef}></div>
    </div>
  );
};

export default DragControlsExample;
