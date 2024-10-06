import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Earth from "../../public/earth/Earth";
import Pegasi from "../../public/51PegasiB/Pegasi";
import Kepler452b from "../../public/kepler452b/Kepler452b"
import Corot7bfiery from "../../public/corot7bfiery/Corot7bfiery"
import Kepler186f from "../../public/kepler186f/Kepler186f"
import Kepler22b from "../../public/kepler22b/Kepler22b"
import Proxima from "../../public/proxima/Proxima"
import { ARButton, XR } from "@react-three/xr";

function Home() {
  return (
    <>
      <ARButton />
      <Canvas>
        <XR>
          <ambientLight />
          <OrbitControls />
          <Suspense fallback={null}>
            <mesh>
              <Pegasi />
            </mesh>
            <mesh
            position={[3,0,0]}>
              <Earth />
            </mesh>
            <mesh
            position={[-3,0,0]} 
            scale={[0.01, 0.01, 0.01]}>
              <Kepler452b/>
            </mesh>
            <mesh
            position={[6,0,0]} 
            scale={[0.001, 0.001, 0.001]}>
              <Corot7bfiery/>
            </mesh>
            <mesh
            position={[-7,0,0]} 
            scale={[0.3, 0.3, 0.3]}>
              <Kepler22b/>
            </mesh>
          </Suspense>
        </XR>
      </Canvas>
    </>
  );
}

export default Home;
