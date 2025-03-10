import { configureStore } from "@reduxjs/toolkit"
import linkReducer from '../libs/links'
import handelReducer from '../libs/handle'

export const store = configureStore({
    reducer: {
        links: linkReducer,
        handle: handelReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch