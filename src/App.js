import "./App.css";
import React, { Suspense, useEffect } from "react";
import {
  useGLTF,
  useProgress,
  Html,
  OrbitControls,
  Sky,
} from "@react-three/drei";

import { Canvas } from "@react-three/fiber";

import Avatar5 from "./components/Avatar5";
import CoolCity from "./components/CoolCity";

function Loader() {
  const { progress } = useProgress();
  return <Html center>{progress} % loaded</Html>;
}

function App() {
  return (
    <div className="canvas">
      <Suspense fallback={null}>
        <Canvas camera={{ position: [0, 4, 6] }}>
          <Suspense fallback={<Loader />}>
            <Avatar5 />
            <CoolCity scale={[0.6, 0.6, 0.6]} />
            <ambientLight intensity={0.9} />
            <mesh
              position={[50, 0, 50]}
              scale={[100, 200, 5]}
              rotation={[-Math.PI / 2, 0, 0]}
            >
              <planeBufferGeometry attach="geometry" args={[3, 3]} />
              <meshBasicMaterial attach="material" color="gray" />
            </mesh>
          </Suspense>
        </Canvas>
      </Suspense>
    </div>
  );
}

export default App;
