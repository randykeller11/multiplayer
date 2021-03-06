/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef, useEffect, useState } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

import useKeyPress from "../hooks/useKeyPress";

export default function Model({ store, username }) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/avatar5.glb");
  const { actions } = useAnimations(animations, group);
  const savedPos = useRef({ position: { z: 0, x: 0 }, rotation: { y: 0 } });

  const wPress = useKeyPress("w");
  const aPress = useKeyPress("a");
  const dPress = useKeyPress("d");

  const [animation, setAnimation] = useState("idle");

  useFrame((state, delta) => {
    const moveDistance = 5 * delta; // 200 pixels per second
    const rotateAngle = (Math.PI / 2) * delta; // pi/2 radians (90 degrees) per second

    if (!wPress) {
      actions["walk"].stop();

      actions["idle"].play();

      group.current.position.z = savedPos.current.position.z;
      group.current.position.x = savedPos.current.position.x;
      if (animation != "idle") {
        setAnimation("idle");
        store[`${username}`].animation = "idle";
      }
    }

    if (wPress) {
      actions["idle"].stop();

      actions["walk"].play();

      group.current.position.z = savedPos.current.position.z;
      group.current.position.x = savedPos.current.position.x;

      group.current.translateZ(moveDistance);
      savedPos.current.position.z = group.current.position.z;
      savedPos.current.position.x = group.current.position.x;
      let storeUpdate = {
        x: group.current.position.x,
        y: group.current.position.y,
        z: group.current.position.z,
      };
      store[`${username}`].position = storeUpdate;
      if (animation != "walk") {
        setAnimation("walk");
        store[`${username}`].animation = "walk";
      }
    }

    if (aPress) {
      group.current.rotation.y = group.current.rotation.y + rotateAngle;
      let storeUpdate = {
        y: group.current.rotation.y,
      };
      store[`${username}`].rotation = storeUpdate;
    }
    if (dPress) {
      group.current.rotation.y = group.current.rotation.y - rotateAngle;
      let storeUpdate = {
        y: group.current.rotation.y,
      };
      store[`${username}`].rotation = storeUpdate;
    }
    const relativeCameraOffset = new THREE.Vector3(-0.6, 1.9, -4);
    const thirdPersonTarget = new THREE.Vector3(0, 2.1, 5);

    var cameraOffset = relativeCameraOffset.applyMatrix4(
      group.current.matrixWorld
    );
    var targetOffset = thirdPersonTarget.applyMatrix4(
      group.current.matrixWorld
    );

    state.camera.position.x = cameraOffset.x;
    state.camera.position.y = cameraOffset.y;
    state.camera.position.z = cameraOffset.z;
    state.camera.lookAt(targetOffset);
  });
  return (
    <group ref={group} dispose={null}>
      <primitive object={nodes.Hips} />
      <skinnedMesh
        geometry={nodes.EyeLeft.geometry}
        material={nodes.EyeLeft.material}
        skeleton={nodes.EyeLeft.skeleton}
      />
      <skinnedMesh
        geometry={nodes.EyeRight.geometry}
        material={nodes.EyeRight.material}
        skeleton={nodes.EyeRight.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Body.geometry}
        material={materials["Wolf3D_Body.002"]}
        skeleton={nodes.Wolf3D_Body.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Outfit_Bottom.geometry}
        material={materials["Wolf3D_Outfit_Bottom.002"]}
        skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Outfit_Footwear.geometry}
        material={materials["Wolf3D_Outfit_Footwear.002"]}
        skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Outfit_Top.geometry}
        material={materials["Wolf3D_Outfit_Top.002"]}
        skeleton={nodes.Wolf3D_Outfit_Top.skeleton}
      />
      <skinnedMesh
        name="Wolf3D_Head"
        geometry={nodes.Wolf3D_Head.geometry}
        material={materials["Wolf3D_Skin.002"]}
        skeleton={nodes.Wolf3D_Head.skeleton}
        morphTargetDictionary={nodes.Wolf3D_Head.morphTargetDictionary}
        morphTargetInfluences={nodes.Wolf3D_Head.morphTargetInfluences}
      />
      <skinnedMesh
        name="Wolf3D_Teeth"
        geometry={nodes.Wolf3D_Teeth.geometry}
        material={materials["Wolf3D_Teeth.002"]}
        skeleton={nodes.Wolf3D_Teeth.skeleton}
        morphTargetDictionary={nodes.Wolf3D_Teeth.morphTargetDictionary}
        morphTargetInfluences={nodes.Wolf3D_Teeth.morphTargetInfluences}
      />
    </group>
  );
}

useGLTF.preload("/avatar5.glb");
