import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type HandleState = {
    loading: boolean
    error: null | Error
}

const initialState: HandleState = {
    loading: false,
    error: null
}

const handleSlice = createSlice({
    name: 'handle',
    initialState,
    reducers: {
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.loading = action.payload
        }
    }
})

export const { setLoading } = handleSlice.actions
export default handleSlice.reducer