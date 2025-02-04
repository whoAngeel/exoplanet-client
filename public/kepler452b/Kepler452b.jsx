/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.2 kepler452b.gltf 
Author: Yo.Ri (https://sketchfab.com/grox777)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/kepler-452b-816d14fb09974160aed7cb264bd770bc
Title: Kepler-452b
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('kepler452b/kepler452b.gltf')
  return (
    <group {...props} dispose={null} scale={[0.01, 0.01 ,0.01]}>
      <mesh geometry={nodes['����������001_CLOUDS_0'].geometry} material={materials.CLOUDS} rotation={[-Math.PI / 2, 0, 0]} scale={103.649} />
      <mesh geometry={nodes['����������_Kepler_0'].geometry} material={materials.Kepler} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
    </group>
  )
}

useGLTF.preload('/kepler452b.gltf')
