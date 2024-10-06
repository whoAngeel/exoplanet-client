import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import EarthCartoon from "../../public/earthCarton/EarthCartoon";
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
            <mesh scale={[0.5, 0.5, 0.5]}
			position={[0,0,-3]}>

            <EarthCartoon />
			</mesh>
          </Suspense>
        </XR>
      </Canvas>
    </>
  );
}

export default Home;
