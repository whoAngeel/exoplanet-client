import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	isLoading: false,
	exoplanets: [
		{
			id: 1,
			name: "Tierra",
			distance: "1234",
			diameter: "19",
			radius: "3.2",
			color: "bg-blue-500",
		},
		{
			id: 2,
			name: "Pegasi",
			distance: "1234",
			diameter: "19",
			radius: "3.2",
			color: "bg-purple-600",
		},
		{
			id: 3,
			name: "Kepler452b",
			distance: "1234cm",
			diameter: "19cm",
			radius: "3.2cm",
			color: "bg-red-500",
		},
		{
			id: 4,
			name: "Corot7bfiery",
			distance: "1234cm",
			diameter: "19cm",
			radius: "3.2cm",
			color: "bg-red-500",
		},
		{
			id: 5,
			name: "Kepler186f",
			distance: "1234cm",
			diameter: "19cm",
			radius: "3.2cm",
			color: "bg-red-500",
		},
		{
			id: 6,
			name: "Kepler22b",
			distance: "1234cm",
			diameter: "19cm",
			radius: "3.2cm",
			color: "bg-red-500",
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
