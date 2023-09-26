import { configureStore } from "@reduxjs/toolkit";
import cities_reducer from "./reducers/cities";
import itineraries_reducer from "./reducers/itineraries";
import activities_reducer from "./reducers/activities";
import users_reducer from "./reducers/users";
import comments_reducer from "./reducers/comments";

export default configureStore({
    reducer: {
        cities: cities_reducer,
        itineraries: itineraries_reducer,
        activities: activities_reducer,
        comments: comments_reducer,
        users: users_reducer
    }
})