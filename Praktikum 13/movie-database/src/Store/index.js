import { configureStore } from "@reduxjs/toolkit";
import moviesReducers from "../features/moviesSlice";

const store = configureStore({
    reducer:{
        movies: moviesReducers,
    },
});
export default store;
