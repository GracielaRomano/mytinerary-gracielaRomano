import { createReducer } from "@reduxjs/toolkit";
import itinerary_actions from "../actions/itineraries";

const { read_itineraries} = itinerary_actions

const initial_state = {
    itineraries:[],
    resultNotFound: false
}

const itineraries_reducer = createReducer(
    initial_state,
    builder => builder.addCase(
    read_itineraries.fulfilled,
    (state,action)=> {
        let new_state = {
            ...state,
            itineraries: action.payload.itineraries,
            resultNotFound: action.payload.itineraries.length === 0 // Actualizar el estado según la longitud de las ciudades
        }
     return new_state
    }
    )
    .addCase(
     read_itineraries.rejected, // Agregar caso para manejar el error
     (state, action) => {
         return {
             ...state,
             itineraries: [], // Restablecer las ciudades a una lista vacía
             resultNotFound: true // Establecer el estado como verdadero al producirse un error
         };
     }
    )
)
export default itineraries_reducer