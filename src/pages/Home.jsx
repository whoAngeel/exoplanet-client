import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import EarthCartoon from "../../public/earthCarton/EarthCartoon";
import World from "../components/World";

function Home() {
	return (
		<>
			<World />
		</>
	);
}

export default Home;
