import { configureStore } from "@reduxjs/toolkit";
import boardSlice from "./boardSlice"; 

const store = configureStore({
    reducer: {
        // Redux Slice
        boards : boardSlice.reducer,
    }
})

export default store