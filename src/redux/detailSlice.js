import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    detailItem: []

};

const DetailSlice = createSlice({
    name: "detail",
    initialState,
    reducers: {
        add: (state, action) => {
            state.detailItem = []
            state.detailItem.push(action.payload)
        },

    },
});

export const { add } = DetailSlice.actions;
export default DetailSlice.reducer;