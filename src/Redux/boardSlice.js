import { createSlice } from "@reduxjs/toolkit";
import data from "../Data/data.json";

const boardSlice = createSlice({
    name: 'boards',
    initialState: data.boards,
    reducers: {
        //Reducers Here Soon
    }
})

export default boardSlice