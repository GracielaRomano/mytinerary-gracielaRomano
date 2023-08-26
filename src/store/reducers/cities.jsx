import { createReducer } from "@reduxjs/toolkit";
import cities_actions from "../actions/cities";

const { read_carousel} = cities_actions

const initial_state = {
    carousel: []
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
    
)
export default cities_reducer