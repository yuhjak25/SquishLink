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
            } else {
                return []
            }
        },
        addLink: (state, action: PayloadAction<Links>) => {
            state.push(action.payload)
        },
        deleteLink: (state, action: PayloadAction<{ id: string }>) => {
            const { id } = action.payload
            return state.filter(link => link._id !== id)
        },
    }
})

export const { setLinks, addLink, deleteLink } = linkSlice.actions
export default linkSlice.reducer