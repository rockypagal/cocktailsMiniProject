import { configureStore } from "@reduxjs/toolkit";
import cocktailsSlice from "./features/cocktailsSlice";
const store = configureStore({
    name:'cocktail',
    reducer:{
        cocktail:cocktailsSlice,
    }
})

export default store;