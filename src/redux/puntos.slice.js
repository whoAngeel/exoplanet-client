import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    isLoading: false,
    puntos: 0,
    error: null,
};
export const puntosSlice = createSlice({
    name: "puntos",
    initialState,
    reducers: {
        sumarPuntos: (state) => {
            state.puntos += 10;
        },
        restarPuntos: (state) => {
            state.puntos -= 10;
        },
        limpiar: (state) => {
            state.puntos = 0;
        }
    },
});



export const {
    sumarPuntos, restarPuntos, limpiar
} = puntosSlice.actions;
export default puntosSlice.reducer;
