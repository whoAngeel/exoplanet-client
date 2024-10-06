import React from "react";
import Carrusel from "../../components/Carrusel";
import { FaChevronLeft } from "react-icons/fa";

function Index() {
	return (
		<>
			<div className="fixed navbar bg-base-100">
				<a className="btn btn-ghost text-xl">
					<FaChevronLeft /> Regresar
				</a>
			</div>
			<div className="flex-1">
				<Carrusel />
			</div>
		</>
	);
}

export default Index;
