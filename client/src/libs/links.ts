import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Links } from "../types"

const initialState: Links[] = []

const linkSlice = createSlice({
    name: 'link',
    initialState,
    reducers: {
        setLinks: (_state, action: PayloadAction<Links[]>) => {
            if (Array.isArray(action.payload)) {
                return action.payload
            }
            return []
        }
    }
})

export const { setLinks } = linkSlice.actions
export default linkSlice.reducer