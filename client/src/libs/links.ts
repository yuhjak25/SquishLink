import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Links } from "../types";

const initialState: Links[] = [];

const linkSlice = createSlice({
    name: "links",
    initialState,
    reducers: {
        setLinks: (_state, action: PayloadAction<Links[]>) => {
            return action.payload;
        },
    },
});

export const { setLinks } = linkSlice.actions;
export default linkSlice.reducer;
