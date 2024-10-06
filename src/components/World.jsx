import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import EarthCartoon from "../../public/earthCarton/EarthCartoon.jsx";
function World() {
	return (
		<>
			<Canvas>
				<ambientLight />
				<OrbitControls />
				<Suspense fallback={null}>
					<EarthCartoon />
				</Suspense>
			</Canvas>
		</>
	);
}

export default World;
