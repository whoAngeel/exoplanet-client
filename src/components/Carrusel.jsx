import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import { Suspense, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";
import {
	FaChevronUp,
	FaChevronDown,
	FaChevronLeft,
	FaChevronRight,
} from "react-icons/fa";
import Exoplanets from "./Exoplanets";
import { Canvas } from "@react-three/fiber";
import { XR } from "@react-three/xr";
import { OrbitControls } from "@react-three/drei";
import { Descriptions, Spin } from "antd";

function Carrusel() {
	const { exoplanets } = useSelector((state) => state.exoplanets);
	console.log(exoplanets);
	const [activeIndex, setActiveIndex] = useState(0);
	const [isOpen, setIsOpen] = useState(false);
	const [planetScale, setPlanetScale] = useState([2, 2, 2]);
	const planetaActual = exoplanets[activeIndex];

	const handleToggleDrawer = () => {
		setIsOpen(!isOpen);
	};

	const handleDragEnd = (event, info) => {
		if (info.point.y > 50) {
			setIsOpen(false);
		}
	};

	const handleNext = () => {
		setActiveIndex((prevIndex) => (prevIndex + 1) % exoplanets.length);
	};

	const handlePrev = () => {
		setActiveIndex(
			(prevIndex) => (prevIndex - 1 + exoplanets.length) % exoplanets.length
		);
	};
	const planetVariants = {
		initial: { opacity: 0, scale: 0.8, x: 100 },
		enter: { opacity: 1, scale: 1, x: 0 },
		exit: { opacity: 0, scale: 0.8, x: -100 },
	};
	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth < 768) {
				setPlanetScale([1.5, 1.5, 1.5]); // Para pantallas más pequeñas
			} else {
				setPlanetScale([2, 2, 2]); // Pantallas más grandes
			}
		};
		window.addEventListener("resize", handleResize);
		handleResize(); // Llamada inicial
		return () => window.removeEventListener("resize", handleResize);
	}, []);
	const safeMargin = window.innerWidth < 768 ? 10 : 0;
	return (
		<div className="relative w-full h-screen top-0 overflow-hidden">
			<div className="flex justify-around items-center space-x-4 pt-20">
				<button onClick={handlePrev} className="btn btn-circle btn-link">
					<FaChevronLeft />
				</button>

				<h1 className="text-center text-3xl font-bold">
					{planetaActual.nombre}
				</h1>

				<button onClick={handleNext} className="btn btn-circle btn-link">
					<FaChevronRight />
				</button>
			</div>

			{/* PLANETA */}
			<div className="relative flex top-0  mb-20 justify-center items-center w-full h-full">
				<Canvas className="w-full h-full">
					<ambientLight />
					<OrbitControls enableZoom={false} />
					<XR>
						<Suspense>
							<mesh position={[0, 0, 0]} scale={planetScale}>
								<Exoplanets name={planetaActual.name} />
							</mesh>
						</Suspense>
					</XR>
				</Canvas>
			</div>

			{/* Drawer */}
			<motion.div
				className="absolute bottom-0 left-0 mb-10 w-full bg-base-content text-base-300 rounded-t-3xl"
				style={{ marginBottom: `${safeMargin}px` }}
				initial={{ y: "80%" }}
				animate={{ y: isOpen ? "0%" : "80%" }}
				transition={{ type: "spring", stiffness: 100 }}
				drag="y"
				dragConstraints={{ top: 0, bottom: 1 }}
				onDragEnd={handleDragEnd}
			>
				<div
					className="flex justify-center items-center py-4 cursor-pointer"
					onClick={handleToggleDrawer}
				>
					<FaChevronUp className={isOpen ? "rotate-180" : ""} />
				</div>

				<div className="p-4">
					<Descriptions
						title={planetaActual.nombre}
						column={1}
						size="small"
					>
						<Descriptions.Item label="Tipo">
							{planetaActual.tipo}
						</Descriptions.Item>
						<Descriptions.Item label="Distancia">
							{planetaActual.distancia}
						</Descriptions.Item>
						<Descriptions label="Periodo Orbital">
							{planetaActual.periodoOrbital}
						</Descriptions>
						<Descriptions.Item label="Temperatura">
							{planetaActual.temperatura}
						</Descriptions.Item>
						<p className="mt-1">{planetaActual.descripcion}</p>
					</Descriptions>
				</div>
			</motion.div>
		</div>
	);
}

export default Carrusel;
