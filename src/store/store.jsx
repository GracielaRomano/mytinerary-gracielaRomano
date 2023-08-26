import { configureStore } from "@reduxjs/toolkit";
import cities_reducer from "./reducers/cities";

export default configureStore({
    reducer: {
        cities: cities_reducer,
        //itineraries: { itineraries: []},
        //users: { users: [] }
    }
})