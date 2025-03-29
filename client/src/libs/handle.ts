import { createSlice, PayloadAction } from "@reduxjs/toolkit"

type HandleState = {
    loading: boolean,
    error: string | null
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
        },
        setError: (state, action: PayloadAction<string>) => {
            state.error = action.payload
        }
    }
})

export const { setLoading } = handleSlice.actions
export default handleSlice.reducer