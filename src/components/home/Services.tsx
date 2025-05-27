import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';

const ShipModel = () => {
  const ship = useGLTF('/container_ship/scene.gltf');
  const ref = useRef<THREE.Group>(null);

  return (
    <primitive
      ref={ref}
      object={ship.scene}
      scale={0.46}
      position={[15, -4, 0]}
      rotation={[0, 11, 0]}
    />
  );
};

const CameraController = ({ scrollY }: { scrollY: number }) => {
  const controlsRef = useRef<any>(null);

  useFrame(() => {
    if (!controlsRef.current) return;

    const camera = controlsRef.current.object;
    const target = controlsRef.current.target;

    const panX = scrollY * 0.01; 

    camera.position.x = panX;
    target.x = panX;

    controlsRef.current.update();
  });

  return (
    <OrbitControls
      ref={controlsRef}
      enableZoom={false}
      enablePan={false}
      maxPolarAngle={Math.PI / 2}
      minPolarAngle={Math.PI / 2}
    />
  );
};

const ShipCanvas = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div style={{ position: 'sticky', top: 0, height: '100vh', width: '100vw',touchAction: 'none'}}>
      <Canvas camera={{ position: [0, 5, 30], fov: 45 }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} />
        <ShipModel />
        <CameraController scrollY={scrollY} />
      </Canvas>
    </div>
  );
};

export default ShipCanvas;
