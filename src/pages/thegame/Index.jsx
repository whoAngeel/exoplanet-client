import React from "react";
import Carrusel from "../../components/Carrusel";
import { FaChevronLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

function Index() {
	return (
		<>
			<div className="fixed z-50 navbar bg-base-100">
				<Link to="/" className="btn btn-ghost text-xl">
					<FaChevronLeft /> Regresar
				</Link>
			</div>
			<div className="flex-1">
				<Carrusel />
			</div>
		</>
	);
}

export default Index;
