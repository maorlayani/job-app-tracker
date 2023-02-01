import { configureStore } from '@reduxjs/toolkit'
import trackerReducer from './reducers/tracker-slice'

export const store = configureStore({
    reducer: {
        tracker: trackerReducer
    }
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

