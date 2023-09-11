import { createReducer } from "@reduxjs/toolkit";
import activity_actions from "../actions/activities";

const { read_activities} = activity_actions

const initial_state = {
    activities: [],
    resultNotFound: false
}

const activities_reducer = createReducer(
    initial_state,
    builder => builder.addCase(
    read_activities.fulfilled,
    (state,action)=> {
        let new_state = {
            ...state,
            activities: action.payload.activities,
            resultNotFound: action.payload.activities.length === 0 // Actualizar el estado según la longitud de las actividades
        }
     return new_state
    }
    )
    .addCase(
     read_activities.rejected, // Agregar caso para manejar el error
     (state, action) => {
         return {
             ...state,
             activities: [], 
             resultNotFound: true // Establecer el estado como verdadero al producirse un error
         };
     }
    )
)
export default activities_reducer