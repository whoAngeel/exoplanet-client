import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import EarthCartoon from "../../public/earthCarton/EarthCartoon"


function Home() {
	
	return (
		<>
		<Canvas>
			<ambientLight/>
			<OrbitControls/>
			<Suspense fallback={null}>
				<EarthCartoon/>
			</Suspense>
		</Canvas>
		</>
	);
}

export default Home;
