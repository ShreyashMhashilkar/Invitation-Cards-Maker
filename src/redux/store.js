import { configureStore } from "@reduxjs/toolkit";
import detailReducer from "./detailSlice";


export const store= configureStore({
    reducer:{
        detail:detailReducer,
        
    },
});