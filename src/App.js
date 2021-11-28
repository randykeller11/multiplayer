import "./App.css";
import React, { Suspense, useState, useEffect } from "react";
import {
  useGLTF,
  useProgress,
  Html,
  OrbitControls,
  Sky,
} from "@react-three/drei";

import { Canvas } from "@react-three/fiber";
import * as Y from "yjs";
import { bindProxyAndYMap } from "valtio-yjs";
import { WebrtcProvider } from "y-webrtc";
import { proxy, subscribe, useSnapshot } from "valtio";

import Avatar5 from "./components/Avatar5";
import DummyAvatar from "./components/DummyAvatar";

const ydoc = new Y.Doc();
const ymap = ydoc.getMap("map");
//master branch is test27
new WebrtcProvider("multiplayer-test27", ydoc);
const avatarStore = proxy({});
bindProxyAndYMap(avatarStore, ymap);

function Loader() {
  const { progress } = useProgress();
  return <Html center>{progress} % loaded</Html>;
}

function App() {
  const [appState, setAppState] = useState(0);
  const [username, setUsername] = useState("");
  const snap = useSnapshot(avatarStore);
  const otherUsers = Object.keys({ ...snap }).filter(
    (user) => user != username
  );

  useEffect(() => {
    console.log(snap);
  }, [snap]);

  return (
    <>
      {appState === 0 && (
        <div>
          <input
            type="text"
            placeholder="enter username"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          <button
            onClick={() => {
              avatarStore[`${username}`] = {
                position: { x: 0, y: 0, z: 0 },
                rotation: { x: 0, y: 0, z: 0 },
                animation: "idle",
              };
              setAppState(1);
            }}
          >
            submit
          </button>
        </div>
      )}
      {appState === 1 && (
        <div className="canvas">
          <Suspense fallback={null}>
            <Canvas camera={{ position: [0, 4, 6] }}>
              <Suspense fallback={<Loader />}>
                <Avatar5 store={avatarStore} username={username} />
                {otherUsers &&
                  otherUsers.map((user) => (
                    <DummyAvatar
                      position={[
                        snap[user].position.x,
                        snap[user].position.y,
                        snap[user].position.z,
                      ]}
                      rotation={[0, snap[user].rotation.y, 0]}
                      animation={snap[user].animation}
                    />
                  ))}
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
      )}
    </>
  );
}

export default App;
