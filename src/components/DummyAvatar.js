/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef, useEffect, useState } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

import useKeyPress from "../hooks/useKeyPress";

export default function Model({ ...props }) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/dummyAvatar.glb");
  const { actions } = useAnimations(animations, group);
  const [isFirstRender, setIsFirstRender] = useState(true);

  useFrame(() => {
    if (isFirstRender) {
      actions["idle"].play();
      setIsFirstRender(false);
    }
    if (props.animation === "idle" && !isFirstRender) {
      actions["walk"].stop();
      actions["idle"].play();
      group.current.position.z = props.position[2];
      group.current.position.x = props.position[0];
      group.current.rotation.y = props.rotation[1];
    }
    if (props.animation === "walk" && !isFirstRender) {
      actions["idle"].stop();
      actions["walk"].play();
      group.current.position.z = props.position[2];
      group.current.position.x = props.position[0];
      group.current.rotation.y = props.rotation[1];
    }
  });

  //   useEffect(() => {
  //     if (isFirstRender) {
  //       actions["idle"].play();
  //       setIsFirstRender(false);
  //     }
  //     if (props.animation === "idle" && !isFirstRender) {
  //       actions["walk"].stop();
  //       actions["idle"].play();
  //     }
  //     if (props.animation === "walk" && !isFirstRender) {
  //       actions["idle"].stop();
  //       actions["walk"].play();
  //     }
  //   }, [props.animation]);

  return (
    <group ref={group} {...props} dispose={null}>
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
