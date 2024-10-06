import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import { useState } from "react";
import { useSelector } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";
import {
	FaChevronUp,
	FaChevronDown,
	FaChevronLeft,
	FaChevronRight,
} from "react-icons/fa";
import DrawerExoPlanetInfo from "./DrawerExoPlanetInfo";

function Carrusel() {
	const { exoplanets } = useSelector((state) => state.exoplanets);
	console.log(exoplanets);
	const [activeIndex, setActiveIndex] = useState(0);
	const [isOpen, setIsOpen] = useState(false);
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

	return (
		<div className="relative w-full h-screen top-0 overflow-hidden ">
			<h1 className="text-center text-3xl pt-10 font-bold ">
				{exoplanets[activeIndex].nombre}
			</h1>

			<button
				onClick={handlePrev}
				className="absolute z-10 left-0 top-1/2 transform -translate-y-1/2 btn btn-circle btn-link"
			>
				<FaChevronLeft />
			</button>

			{/* PLANETA */}
			<AnimatePresence>
				<motion.div
					variants={planetVariants}
					initial="initial"
					animate="enter"
					exit="exit"
					transition={{ duration: 0.5 }}
					className="absolute  flex justify-center items-center w-full h-full pb-32"
				>
					<div
						className="w-56 h-56 rounded-full mx-auto"
						style={{ backgroundColor: planetaActual.color }}
					/>
				</motion.div>
			</AnimatePresence>

			<button
				onClick={handleNext}
				className="absolute z-10 right-0 top-1/2 transform -translate-y-1/2 btn btn-circle btn-link "
			>
				<FaChevronRight />
			</button>

			{/* Drawer */}
			<motion.div
				className="absolute bottom-0 left-0 w-full bg-base-content text-base-300 rounded-t-3xl"
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
					<h2 className="text-xl font-bold">{planetaActual.nombre}</h2>
					<p>{planetaActual.descripcion}</p>
					<div className="flex w-full items-center justify-center mt-2 ">
						<button className="btn btn-secondary  btn-wide">
							Realidad Aumentada
						</button>
					</div>
				</div>
			</motion.div>
		</div>
	);
}

export default Carrusel;
