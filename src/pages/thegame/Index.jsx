import React from "react";
import Carrusel from "../../components/Carrusel";

function Index() {
	return (
		<>
			<div className="navbar bg-base-100">
				<a className="btn btn-ghost text-xl">daisyUI</a>
			</div>
			<div className="flex-1">
				<Carrusel />
			</div>
		</>
	);
}

export default Index;
