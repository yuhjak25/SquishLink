import { createSlice, PayloadAction } from "@reduxjs/toolkit"


export interface FormErrors {
    userLink?: string,
    createdLink?: string
}

type HandleState = {
    loading: boolean,
    error: FormErrors
}

const initialState: HandleState = {
    loading: false,
    error: {} as FormErrors
}

const handleSlice = createSlice({
    name: 'handle',
    initialState,
    reducers: {
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.loading = action.payload
        },
        setError: (state, action: PayloadAction<object>) => {
            state.error = action.payload
        },
        clearError: (state) => {
            state.error = {}
        }
    }
})

export const { setLoading, setError, clearError } = handleSlice.actions
export default handleSlice.reducer