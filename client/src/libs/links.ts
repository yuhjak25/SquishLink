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
        },
        addLinks: (state, action: PayloadAction<Links>) => {
            state.push(action.payload)
        }
    }
})

export const { setLinks, addLinks } = linkSlice.actions
export default linkSlice.reducer