import React, { Suspense, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';


import { OrbitControls, useGLTF } from '@react-three/drei';
import CanvasLoader from '../Loader';
const Astronaut = () => {
  const { scene } = useGLTF('/Astro/scene.gltf');
  
  return (
    <mesh>
      <hemisphereLight intensity={9} groundColor="black" />
      <pointLight intensity={6} />
      <spotLight intensity={30} />
      <primitive object={scene} scale={7} position={[1, -2.75, 0]} rotation={[-0.01, -0.2, -0.1]} />
    </mesh>
  );
};

const AstroCanvas = () => {
  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
      size={{ width: 800, height: 600 }} // Set a smaller canvas size
      // Lower the device pixel ratio for reduced clarity
       
    >
      <Suspense fallback={<CanvasLoader/>}>
        <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
        <Astronaut/>
      </Suspense>
    </Canvas>
  );
};

export default AstroCanvas;
