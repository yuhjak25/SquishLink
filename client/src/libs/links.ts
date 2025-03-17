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
        updateLink: (state, action: PayloadAction<{ id: string, createdLink: string }>) => {
            const link = state.find(link => link._id === action.payload.id)
            if (link) {
                link.createdLink = action.payload.createdLink
            }
        }
    }
})

export const { setLinks, addLink, deleteLink, updateLink } = linkSlice.actions
export default linkSlice.reducer