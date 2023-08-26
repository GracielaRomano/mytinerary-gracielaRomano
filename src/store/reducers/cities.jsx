import { createReducer } from "@reduxjs/toolkit";
import cities_actions from "../actions/cities";

const { read_carousel, read_cities} = cities_actions

const initial_state = {
    carousel: [],
    cities: [],
    resultNotFound: false // Agregar el estado para controlar si no se encontraron resultados
}

const cities_reducer = createReducer(
    initial_state,
    builder => builder.addCase(
        read_carousel.fulfilled,
        (state,action)=> {
            let new_state = {
                ...state,
                carousel: action.payload.carousel
            }
            return new_state
        }
    )
    .addCase(
       read_cities.fulfilled,
       (state,action)=> {
        let new_state = {
            ...state,
            cities: action.payload.cities,
            resultNotFound: action.payload.cities.length === 0 // Actualizar el estado según la longitud de las ciudades
        }
        return new_state
       } 
    )
    .addCase(
        read_cities.rejected, // Agregar caso para manejar el error
        (state, action) => {
            return {
                ...state,
                cities: [], // Restablecer las ciudades a una lista vacía
                resultNotFound: true // Establecer el estado como verdadero al producirse un error
            };
        }
    )
)
export default cities_reducer