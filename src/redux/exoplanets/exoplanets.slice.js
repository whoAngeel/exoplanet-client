import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	isLoading: false,
	exoplanets: [
		{
			nombre: "Tierra",
			tipo: "Planeta terrestre",
			distancia: "1 UA",
			periodoOrbital: "365 días",
			temperatura: "15°C",
			descripcion:
				"La Tierra es el único planeta conocido por albergar vida en el sistema solar. Tiene agua líquida y una atmósfera protectora.",
			color: "#4CAF50", // Verde Tierra
			name: "Tierra",
		},
		{
			nombre: "51 Pegasi b",
			tipo: "Gigante gaseoso (Júpiter caliente)",
			distancia: "50.45 años luz",
			periodoOrbital: "4.23 días",
			temperatura: "1,000°C",
			descripcion:
				"El primer exoplaneta descubierto alrededor de una estrella similar al Sol. Es un Júpiter caliente debido a su cercanía a la estrella.",
			color: "#FFD700", // Dorado brillante
			name: "Pegasi",
		},
		{
			nombre: "Kepler 452b",
			tipo: "Super-Tierra",
			distancia: "1,400 años luz",
			periodoOrbital: "385 días",
			temperatura: "22°C",
			descripcion:
				"Kepler 452b está en la zona habitable de su estrella y es conocido como el 'primo de la Tierra' debido a su similitud.",
			color: "#87CEEB", // Azul cielo
			name: "Kepler452b",
		},
		{
			nombre: "Corot 7b",
			tipo: "Super-Tierra (Planeta de lava)",
			distancia: "489 años luz",
			periodoOrbital: "0.85 días",
			temperatura: "2,000°C",
			descripcion:
				"Un planeta extremadamente cercano a su estrella, lo que hace que su superficie esté llena de lava debido a las altas temperaturas.",
			color: "#FF4500", // Naranja ardiente
			name: "Corot7bfiery",
		},
		{
			nombre: "Kepler 186f",
			tipo: "Super-Tierra",
			distancia: "500 años luz",
			periodoOrbital: "129.9 días",
			temperatura: "-40°C",
			descripcion:
				"Este exoplaneta se encuentra en la zona habitable de su estrella, una enana roja, lo que lo hace un candidato interesante para la búsqueda de vida.",
			color: "#8B4513", // Marrón rojizo
			name: "Kepler186f",
		},
	],
	error: null,
};
export const exoplanetsSlice = createSlice({
	name: "exoplanets",
	initialState,
	reducers: {},
});

// export const {} = exoplanetsSlice.actions;
export default exoplanetsSlice.reducer;
