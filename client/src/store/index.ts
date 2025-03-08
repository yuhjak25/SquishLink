import { configureStore } from "@reduxjs/toolkit"
import links from '../libs/links'

export const store = configureStore({
    reducer: {
        links
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch