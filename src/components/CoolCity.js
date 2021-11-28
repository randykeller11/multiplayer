/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/coolCity.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        geometry={nodes.Cube004.geometry}
        material={nodes.Cube004.material}
        position={[37.31, 3.63, -34.26]}
        scale={[1.88, 3.36, 0.14]}
      />
      <group position={[18.82, 0.93, -7.37]} scale={0.5}>
        <mesh geometry={nodes.Circle018.geometry} material={nodes.Circle018.material} />
        <mesh geometry={nodes.Circle018_1.geometry} material={nodes.Circle018_1.material} />
      </group>
      <group position={[15.56, 0.93, -0.94]} scale={0.5}>
        <mesh geometry={nodes.Circle017_1.geometry} material={nodes.Circle017_1.material} />
        <mesh geometry={nodes.Circle017_2.geometry} material={nodes.Circle017_2.material} />
      </group>
      <group position={[15.56, 0.93, -4.75]} scale={0.5}>
        <mesh geometry={nodes.Circle016_1.geometry} material={nodes.Circle016_1.material} />
        <mesh geometry={nodes.Circle016_2.geometry} material={nodes.Circle016_2.material} />
      </group>
      <group position={[13.53, 0.93, -7.92]} scale={0.5}>
        <mesh geometry={nodes.Circle015_1.geometry} material={nodes.Circle015_1.material} />
        <mesh geometry={nodes.Circle015_2.geometry} material={nodes.Circle015_2.material} />
      </group>
      <group position={[16.41, 0.93, -11.93]} scale={0.5}>
        <mesh geometry={nodes.Circle014_1.geometry} material={nodes.Circle014_1.material} />
        <mesh geometry={nodes.Circle014_2.geometry} material={nodes.Circle014_2.material} />
      </group>
      <group position={[19.53, 1.03, 0.82]} rotation={[0, -Math.PI / 2, 0]} scale={0.59}>
        <mesh geometry={nodes.Circle010_1.geometry} material={nodes.Circle010_1.material} />
        <mesh geometry={nodes.Circle010_2.geometry} material={nodes.Circle010_2.material} />
      </group>
      <group position={[17.4, 1.03, 13.44]} scale={0.59}>
        <mesh geometry={nodes.Circle007_1.geometry} material={nodes.Circle007_1.material} />
        <mesh geometry={nodes.Circle007_2.geometry} material={nodes.Circle007_2.material} />
      </group>
      <group position={[17.4, 1.03, 10.91]} scale={0.59}>
        <mesh geometry={nodes.Circle005_1.geometry} material={nodes.Circle005_1.material} />
        <mesh geometry={nodes.Circle005_2.geometry} material={nodes.Circle005_2.material} />
      </group>
      <group position={[17.4, 1.03, 8.37]} scale={0.59}>
        <mesh geometry={nodes.Circle004_1.geometry} material={nodes.Circle004_1.material} />
        <mesh geometry={nodes.Circle004_2.geometry} material={nodes.Circle004_2.material} />
      </group>
      <group position={[17.4, 1.03, 5.83]} scale={0.59}>
        <mesh geometry={nodes.Circle003_1.geometry} material={nodes.Circle003_1.material} />
        <mesh geometry={nodes.Circle003_2.geometry} material={nodes.Circle003_2.material} />
      </group>
      <group position={[10.76, 1.88, 48.39]} scale={[0.39, 0.63, 0.63]}>
        <mesh geometry={nodes.Cube061.geometry} material={nodes.Cube061.material} />
        <mesh geometry={nodes.Cube061_1.geometry} material={nodes.Cube061_1.material} />
      </group>
      <group position={[193.48, 43.81, -39.47]} scale={[7.35, 18.59, 7.35]}>
        <mesh geometry={nodes.Cube060.geometry} material={nodes.Cube060.material} />
        <mesh geometry={nodes.Cube060_1.geometry} material={nodes.Cube060_1.material} />
      </group>
      <mesh
        geometry={nodes.Cube065.geometry}
        material={nodes.Cube065.material}
        position={[88.26, 47.96, -52.11]}
        scale={[2.24, 1.06, 2.24]}
      />
      <group position={[62.93, 1.06, -53.3]}>
        <mesh geometry={nodes.Cube057.geometry} material={nodes.Cube057.material} />
        <mesh geometry={nodes.Cube057_1.geometry} material={nodes.Cube057_1.material} />
      </group>
      <group position={[140.46, 19.66, -32.18]} rotation={[3.04, -0.63, 2.96]} scale={6.13}>
        <mesh geometry={nodes.Cube056_1.geometry} material={nodes.Cube056_1.material} />
        <mesh geometry={nodes.Cube056_2.geometry} material={nodes.Cube056_2.material} />
      </group>
      <group position={[111.72, 11.86, -22.87]} rotation={[0, 0.3, 0]} scale={[8.04, 10.66, 6.13]}>
        <mesh geometry={nodes.Cube048.geometry} material={nodes.Cube048.material} />
        <mesh geometry={nodes.Cube048_1.geometry} material={nodes.Cube048_1.material} />
      </group>
      <group position={[71.67, 11.86, -20.73]} scale={[8.04, 6.13, 6.13]}>
        <mesh geometry={nodes.Cube043.geometry} material={nodes.Cube043.material} />
        <mesh geometry={nodes.Cube043_1.geometry} material={nodes.Cube043_1.material} />
      </group>
      <mesh
        geometry={nodes.Cube046.geometry}
        material={materials.barrier}
        position={[24.18, 4.1, -42.02]}
        scale={[0.84, 0.94, 1]}
      />
      <mesh geometry={nodes.Cube018.geometry} material={nodes.Cube018.material} position={[24.18, 4.1, -42.02]} />
      <mesh
        geometry={nodes.Cube015.geometry}
        material={nodes.Cube015.material}
        position={[-61.09, 3.34, 37.43]}
        scale={[1, 1, 0.16]}
      />
      <group position={[14.3, 3.39, -11.89]} scale={0.62}>
        <mesh geometry={nodes.Cylinder006_1.geometry} material={nodes.Cylinder006_1.material} />
        <mesh geometry={nodes.Cylinder006_2.geometry} material={nodes.Cylinder006_2.material} />
      </group>
      <mesh
        geometry={nodes.Circle008.geometry}
        material={nodes.Circle008.material}
        position={[14.19, 2.48, -4.69]}
        scale={0.21}
      />
      <mesh
        geometry={nodes.Cylinder002.geometry}
        material={nodes.Cylinder002.material}
        position={[13.76, 2.66, -1.78]}
        scale={0.21}
      />
      <mesh
        geometry={nodes.Cylinder.geometry}
        material={nodes.Cylinder.material}
        position={[13.43, 2.65, -4.23]}
        scale={0.2}
      />
      <mesh
        geometry={nodes.Cube040.geometry}
        material={nodes.Cube040.material}
        position={[-18.27, 2.11, 9.27]}
        scale={[1.12, 2, 0.08]}
      />
      <group position={[13.46, 1.33, -3.29]} rotation={[0, Math.PI / 2, 0]} scale={1.75}>
        <mesh geometry={nodes.Cube037_1.geometry} material={nodes.Cube037_1.material} />
        <mesh geometry={nodes.Cube037_2.geometry} material={nodes.Cube037_2.material} />
      </group>
      <group position={[17.4, 0.15, 3.29]} scale={0.59}>
        <mesh geometry={nodes.Circle_1.geometry} material={nodes.Circle_1.material} />
        <mesh geometry={nodes.Circle_2.geometry} material={nodes.Circle_2.material} />
      </group>
      <group position={[-21.92, 37.23, 16.01]} scale={[2.24, 1.06, 2.24]}>
        <mesh geometry={nodes.Cube_1.geometry} material={nodes.Cube_1.material} />
        <mesh geometry={nodes.Cube_2.geometry} material={nodes.Cube_2.material} />
      </group>
      <group position={[-11.48, 6.9, 15.03]} scale={6.13}>
        <mesh geometry={nodes.Cube006_1.geometry} material={nodes.Cube006_1.material} />
        <mesh geometry={nodes.Cube006_2.geometry} material={nodes.Cube006_2.material} />
      </group>
      <group position={[16.07, 2.35, -3.47]} scale={6.13}>
        <mesh geometry={nodes.Cube002_1.geometry} material={nodes.Cube002_1.material} />
        <mesh geometry={nodes.Cube002_2.geometry} material={nodes.Cube002_2.material} />
        <mesh geometry={nodes.Cube002_3.geometry} material={nodes.Cube002_3.material} />
      </group>
      <group position={[-0.88, -0.37, 0.45]} scale={[1, 0.23, 1]}>
        <mesh geometry={nodes.Cube001_1.geometry} material={nodes.Cube001_1.material} />
        <mesh geometry={nodes.Cube001_2.geometry} material={nodes.Cube001_2.material} />
        <mesh geometry={nodes.Cube001_3.geometry} material={materials.gray} />
        <mesh geometry={nodes.Cube001_4.geometry} material={nodes.Cube001_4.material} />
        <mesh geometry={nodes.Cube001_5.geometry} material={materials.energy} />
      </group>
      <group position={[16.07, 5.38, -27.8]} scale={6.13}>
        <mesh geometry={nodes.Cube003_1.geometry} material={nodes.Cube003_1.material} />
        <mesh geometry={nodes.Cube003_2.geometry} material={nodes.Cube003_2.material} />
      </group>
      <group position={[-11.48, 5.38, -15.69]} scale={6.13}>
        <mesh geometry={nodes.Cube000.geometry} material={nodes.Cube000.material} />
        <mesh geometry={nodes.Cube000_1.geometry} material={nodes.Cube000_1.material} />
      </group>
      <group position={[-34.68, 5.38, 15.03]} scale={[6.01, 6.13, 6.13]}>
        <mesh geometry={nodes.Cube005_1.geometry} material={nodes.Cube005_1.material} />
        <mesh geometry={nodes.Cube005_2.geometry} material={nodes.Cube005_2.material} />
        <mesh geometry={nodes.Cube005_3.geometry} material={nodes.Cube005_3.material} />
      </group>
      <group position={[10.26, 2.28, 31.8]} scale={0.75}>
        <mesh geometry={nodes.Cube013_1.geometry} material={nodes.Cube013_1.material} />
        <mesh geometry={nodes.Cube013_2.geometry} material={nodes.Cube013_2.material} />
        <mesh geometry={nodes.Cube013_3.geometry} material={nodes.Cube013_3.material} />
      </group>
      <group position={[-42.93, 5.38, -15.69]} scale={6.13}>
        <mesh geometry={nodes.Cube011_1.geometry} material={nodes.Cube011_1.material} />
        <mesh geometry={nodes.Cube011_2.geometry} material={nodes.Cube011_2.material} />
      </group>
      <group position={[-7.12, 2.21, 39.99]} scale={0.83}>
        <mesh geometry={nodes.Cube015_1.geometry} material={nodes.Cube015_1.material} />
        <mesh geometry={nodes.Cube015_2.geometry} material={nodes.Cube015_2.material} />
        <mesh geometry={nodes.Cube015_3.geometry} material={materials.green} />
        <mesh geometry={nodes.Cube015_4.geometry} material={nodes.Cube015_4.material} />
      </group>
      <group position={[-29.51, 2.01, 39.86]} rotation={[-Math.PI, 0, -Math.PI]} scale={0.73}>
        <mesh geometry={nodes.Cube016_1.geometry} material={nodes.Cube016_1.material} />
        <mesh geometry={nodes.Cube016_2.geometry} material={nodes.Cube016_2.material} />
      </group>
      <group position={[-12.23, 5.38, -56.98]} scale={6.13}>
        <mesh geometry={nodes.Cube020_1.geometry} material={nodes.Cube020_1.material} />
        <mesh geometry={nodes.Cube020_2.geometry} material={nodes.Cube020_2.material} />
      </group>
      <group position={[33.55, 5.38, 62.5]} rotation={[0, Math.PI / 2, 0]} scale={[6.01, 6.13, -6.13]}>
        <mesh geometry={nodes.Cube021_1.geometry} material={nodes.Cube021_1.material} />
        <mesh geometry={nodes.Cube021_2.geometry} material={nodes.Cube021_2.material} />
        <mesh geometry={nodes.Cube021_3.geometry} material={nodes.Cube021_3.material} />
      </group>
      <group position={[-44.76, 5.38, 56.53]} rotation={[0, Math.PI / 2, 0]} scale={6.13}>
        <mesh geometry={nodes.Cube022_1.geometry} material={nodes.Cube022_1.material} />
        <mesh geometry={nodes.Cube022_2.geometry} material={nodes.Cube022_2.material} />
        <mesh geometry={nodes.Cube022_3.geometry} material={nodes.Cube022_3.material} />
      </group>
      <group position={[29.82, 5.38, 41.28]} scale={6.13}>
        <mesh geometry={nodes.Cube023_1.geometry} material={nodes.Cube023_1.material} />
        <mesh geometry={nodes.Cube023_2.geometry} material={nodes.Cube023_2.material} />
      </group>
      <group position={[30.49, 5.38, 16.45]} scale={[6.13, 6.13, 3.38]}>
        <mesh geometry={nodes.Cube024_1.geometry} material={nodes.Cube024_1.material} />
        <mesh geometry={nodes.Cube024_2.geometry} material={nodes.Cube024_2.material} />
        <mesh geometry={nodes.Cube024_3.geometry} material={nodes.Cube024_3.material} />
      </group>
      <group position={[31.05, 5.38, -1.2]} scale={[6.13, 6.13, 3.38]}>
        <mesh geometry={nodes.Cube025_1.geometry} material={nodes.Cube025_1.material} />
        <mesh geometry={nodes.Cube025_2.geometry} material={nodes.Cube025_2.material} />
        <mesh geometry={nodes.Cube025_3.geometry} material={nodes.Cube025_3.material} />
      </group>
      <mesh
        geometry={nodes.Cube025.geometry}
        material={nodes.Cube025.material}
        position={[58.88, -1.03, 27.19]}
        scale={[2.07, 6.13, 6.02]}
      />
      <group position={[-9.4, 1.88, 56.55]} scale={[0.4, 0.65, 0.65]}>
        <mesh geometry={nodes.Cube007.geometry} material={nodes.Cube007.material} />
        <mesh geometry={nodes.Cube007_1.geometry} material={nodes.Cube007_1.material} />
      </group>
      <mesh
        geometry={nodes.Cube035.geometry}
        material={nodes.Cube035.material}
        position={[29.25, 17.49, 60.11]}
        scale={[2.24, 1.06, 2.24]}
      />
      <group position={[21.93, 0.15, 0.82]} rotation={[0, -Math.PI / 2, 0]} scale={0.59}>
        <mesh geometry={nodes.Circle001_1.geometry} material={nodes.Circle001_1.material} />
        <mesh geometry={nodes.Circle001_2.geometry} material={nodes.Circle001_2.material} />
      </group>
      <group position={[14.3, 1.58, -13.15]} rotation={[0, Math.PI / 2, 0]} scale={2.12}>
        <mesh geometry={nodes.Cube038_1.geometry} material={nodes.Cube038_1.material} />
        <mesh geometry={nodes.Cube038_2.geometry} material={nodes.Cube038_2.material} />
      </group>
      <group position={[20.97, 1.37, -6.7]} rotation={[0, Math.PI / 2, 0]} scale={1.79}>
        <mesh geometry={nodes.Cube039_1.geometry} material={nodes.Cube039_1.material} />
        <mesh geometry={nodes.Cube039_2.geometry} material={nodes.Cube039_2.material} />
      </group>
      <group position={[15.13, -4.96, 99.72]} rotation={[0, -0.65, 0]} scale={[8.04, 6.13, 6.13]}>
        <mesh geometry={nodes.Cube051.geometry} material={nodes.Cube051.material} />
        <mesh geometry={nodes.Cube051_1.geometry} material={nodes.Cube051_1.material} />
      </group>
      <group position={[66.51, 22.99, 58.98]} scale={[7.35, 18.59, 7.35]}>
        <mesh geometry={nodes.Cube055_1.geometry} material={nodes.Cube055_1.material} />
        <mesh geometry={nodes.Cube055_2.geometry} material={nodes.Cube055_2.material} />
      </group>
      <mesh
        geometry={nodes.Cube027.geometry}
        material={nodes.Cube027.material}
        position={[48.76, 4.37, 54.99]}
        rotation={[0, -1.57, 0]}
        scale={[12.36, 6.13, 6.13]}
      />
      <group position={[-52.02, 26.21, -44.71]} scale={[7.35, 18.59, 7.35]}>
        <mesh geometry={nodes.Cube062_1.geometry} material={nodes.Cube062_1.material} />
        <mesh geometry={nodes.Cube062_2.geometry} material={nodes.Cube062_2.material} />
      </group>
      <group position={[16.41, 0.19, -14.36]} scale={0.5}>
        <mesh geometry={nodes.Circle006_1.geometry} material={nodes.Circle006_1.material} />
        <mesh geometry={nodes.Circle006_2.geometry} material={nodes.Circle006_2.material} />
      </group>
      <mesh
        geometry={nodes.Cube053.geometry}
        material={nodes.Cube053.material}
        position={[-15.42, 2.04, 21.31]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[1.12, 2, 0.08]}
      />
      <mesh
        geometry={nodes.Cube054.geometry}
        material={nodes.Cube054.material}
        position={[11.89, 3.05, 17.68]}
        rotation={[-Math.PI, 1.12, -Math.PI]}
        scale={[1.61, 2.87, 0.12]}
      />
      <mesh
        geometry={nodes.Cube055.geometry}
        material={nodes.Cube055.material}
        position={[23.16, 3.16, -14.26]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[1.73, 3.1, 0.13]}
      />
      <mesh
        geometry={nodes.Cube056.geometry}
        material={nodes.Cube056.material}
        position={[8.85, 3.14, 6.35]}
        rotation={[0, Math.PI / 4, 0]}
        scale={[1.25, 2.94, 0.09]}
      />
      <mesh
        geometry={nodes.Circle009.geometry}
        material={nodes.Circle009.material}
        position={[14.19, 2.48, -1.13]}
        scale={0.21}
      />
      <mesh
        geometry={nodes.Circle011.geometry}
        material={nodes.Circle011.material}
        position={[20.01, 2.48, -7.58]}
        scale={0.21}
      />
      <mesh
        geometry={nodes.Cylinder003.geometry}
        material={nodes.Cylinder003.material}
        position={[21.1, 2.58, -7.36]}
        scale={0.2}
      />
      <mesh
        geometry={nodes.Circle012.geometry}
        material={nodes.Circle012.material}
        position={[15.77, 2.79, -14.51]}
        scale={0.21}
      />
      <mesh
        geometry={nodes.Circle010.geometry}
        material={nodes.Circle010.material}
        position={[15.77, 2.79, -12.32]}
        scale={0.21}
      />
      <mesh
        geometry={nodes.Cylinder005.geometry}
        material={nodes.Cylinder005.material}
        position={[15.02, 2.96, -14.04]}
        scale={0.2}
      />
      <mesh
        geometry={nodes.Cylinder004.geometry}
        material={nodes.Cylinder004.material}
        position={[15.34, 2.97, -11.6]}
        scale={0.21}
      />
      <mesh
        geometry={nodes.Cylinder007.geometry}
        material={nodes.Cylinder007.material}
        position={[19.05, 3.29, 9.77]}
        scale={0.21}
      />
      <mesh
        geometry={nodes.Cylinder008.geometry}
        material={nodes.Cylinder008.material}
        position={[18.91, 3.29, 12.38]}
        rotation={[Math.PI, -0.25, Math.PI]}
        scale={0.21}
      />
      <group position={[19.65, 3.48, 6.04]} scale={0.42}>
        <mesh geometry={nodes.Cylinder009_1.geometry} material={nodes.Cylinder009_1.material} />
        <mesh geometry={nodes.Cylinder009_2.geometry} material={nodes.Cylinder009_2.material} />
      </group>
      <group position={[23.11, 5.8, 14.19]} rotation={[0, 0.42, 0]} scale={0.15}>
        <mesh geometry={nodes.Cylinder017_1.geometry} material={nodes.Cylinder017_1.material} />
        <mesh geometry={nodes.Cylinder017_2.geometry} material={nodes.Cylinder017_2.material} />
      </group>
      <group position={[-18.9, -4.96, 85.85]} rotation={[0, -0.02, 0]} scale={[8.04, 6.13, 6.13]}>
        <mesh geometry={nodes.Cube029_1.geometry} material={nodes.Cube029_1.material} />
        <mesh geometry={nodes.Cube029_2.geometry} material={nodes.Cube029_2.material} />
      </group>
      <group position={[-14.22, 3.23, -38.5]} rotation={[0, Math.PI / 2, 0]} scale={[7.09, 6.13, 5.09]}>
        <mesh geometry={nodes.Cube008.geometry} material={nodes.Cube008.material} />
        <mesh geometry={nodes.Cube008_1.geometry} material={nodes.Cube008_1.material} />
        <mesh geometry={nodes.Cube008_2.geometry} material={nodes.Cube008_2.material} />
      </group>
      <group position={[40.91, 18.84, -94.32]} scale={[10.81, 17.72, 11.23]}>
        <mesh geometry={nodes.Cube032_1.geometry} material={nodes.Cube032_1.material} />
        <mesh geometry={nodes.Cube032_2.geometry} material={nodes.Cube032_2.material} />
      </group>
      <group position={[-20.21, 5.38, -98.03]} rotation={[0, -1.17, 0]} scale={[9.78, 9.98, 9.98]}>
        <mesh geometry={nodes.Cube033_1.geometry} material={nodes.Cube033_1.material} />
        <mesh geometry={nodes.Cube033_2.geometry} material={nodes.Cube033_2.material} />
        <mesh geometry={nodes.Cube033_3.geometry} material={nodes.Cube033_3.material} />
      </group>
      <group position={[-97.68, 6.9, -24.8]} rotation={[Math.PI, -0.9, Math.PI]} scale={6.13}>
        <mesh geometry={nodes.Cube036_1.geometry} material={nodes.Cube036_1.material} />
        <mesh geometry={nodes.Cube036_2.geometry} material={nodes.Cube036_2.material} />
      </group>
      <group position={[-83.59, 6.9, -42.55]} rotation={[Math.PI, -0.9, Math.PI]} scale={6.13}>
        <mesh geometry={nodes.Cube053_1.geometry} material={nodes.Cube053_1.material} />
        <mesh geometry={nodes.Cube053_2.geometry} material={nodes.Cube053_2.material} />
      </group>
      <group position={[-67.41, 3.55, -22.16]} scale={[6.01, 3.25, 6.13]}>
        <mesh geometry={nodes.Cube064_1.geometry} material={nodes.Cube064_1.material} />
        <mesh geometry={nodes.Cube064_2.geometry} material={nodes.Cube064_2.material} />
        <mesh geometry={nodes.Cube064_3.geometry} material={nodes.Cube064_3.material} />
      </group>
      <group position={[-78.2, 5.38, 28.6]} rotation={[0, Math.PI / 2, 0]} scale={[14.46, 6.13, 6.13]}>
        <mesh geometry={nodes.Cube065_1.geometry} material={nodes.Cube065_1.material} />
        <mesh geometry={nodes.Cube065_2.geometry} material={nodes.Cube065_2.material} />
        <mesh geometry={nodes.Cube065_3.geometry} material={nodes.Cube065_3.material} />
      </group>
      <group position={[-72.58, 5.38, 73.4]} rotation={[-Math.PI, 0.83, -Math.PI]} scale={6.13}>
        <mesh geometry={nodes.Cube066_1.geometry} material={nodes.Cube066_1.material} />
        <mesh geometry={nodes.Cube066_2.geometry} material={nodes.Cube066_2.material} />
      </group>
      <group position={[36.91, 16.02, 86.08]} rotation={[-Math.PI, 0, -Math.PI]} scale={6.13}>
        <mesh geometry={nodes.Cube067_1.geometry} material={nodes.Cube067_1.material} />
        <mesh geometry={nodes.Cube067_2.geometry} material={nodes.Cube067_2.material} />
      </group>
    </group>
  )
}

useGLTF.preload('/coolCity.glb')