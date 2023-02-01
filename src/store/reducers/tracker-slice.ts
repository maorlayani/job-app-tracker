import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { data } from '../../data/data'
import { application } from '../../interfaces/trakcer'

interface TrackerState {
    applications: application[],
    applicationDetails: application,
    isDetailsOpen: boolean
}

const initialState: TrackerState = {
    applications: data,
    applicationDetails: data[0],
    isDetailsOpen: false
}

export const trackerSlice = createSlice({
    name: 'tracker',
    initialState,
    reducers: {
        addApplication: (state, action: PayloadAction<application>) => {
            state.applications.push(action.payload)
        },
        removeApplication: (state, action) => {
            state.applications =
                state.applications.filter(app => app.id !== action.payload)
        },
        setCurrentApplicationDetails: (state, action) => {
            state.applicationDetails = action.payload
        },
        toggleApplicationDetails: (state) => {
            state.isDetailsOpen = !state.isDetailsOpen
        }
    }
})

export const {
    addApplication,
    removeApplication,
    toggleApplicationDetails,
    setCurrentApplicationDetails } = trackerSlice.actions

export default trackerSlice.reducer;