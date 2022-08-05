import {configureStore} from "@reduxjs/toolkit"
import HeaderReducer from "./reducers/headerReducer";

export const store = configureStore({
    reducer: {
        header: HeaderReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
