import { configureStore } from "@reduxjs/toolkit";
import cities_reducer from "./reducers/cities";
import itineraries_reducer from "./reducers/itineraries";

export default configureStore({
    reducer: {
        cities: cities_reducer,
        itineraries: itineraries_reducer,
        //users: { users: [] }
    }
})