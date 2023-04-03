import React, { Suspense, useRef } from 'react'
import { Canvas, useLoader,useFrame} from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { OrbitControls } from "@react-three/drei";
import display from '../assets/stylized_crystal.glb';
import '../index.css';
function Object() {
    const mesh = useRef()
    // useFrame(() => {
    //   mesh.current.rotation.y += 0.01
    // })
    useFrame(({ mouse }) => {
        mesh.current.rotation.x = mouse.y * 0.2;
        mesh.current.rotation.y = mouse.x * 0.2;
      })
    const gltf = useLoader(GLTFLoader, display)
    return <primitive ref={mesh} object={gltf.scene} scale={.1} position={[-1.5, -6, -5]} />
}

function Home3d() {
    return (
        <Canvas>
            <OrbitControls enablePan={false} enableZoom={false}/>
            <ambientLight intensity={1} />
            <Suspense>{<Object />}</Suspense>
        </Canvas>
    );
}

export default Home3d;