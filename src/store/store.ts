import { configureStore } from '@reduxjs/toolkit'
import trackerReducer from './reducers/tracker-slice'
import userReducer from './reducers/user-slice'
export const store = configureStore({
    reducer: {
        tracker: trackerReducer,
        user: userReducer
    }
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

