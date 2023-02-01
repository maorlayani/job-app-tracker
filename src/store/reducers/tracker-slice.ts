import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { data } from '../../data/data'
import { application, draftApplication } from '../../interfaces/trakcer'
import { trackerService } from '../../services/tracker.service'

interface TrackerState {
    applications: application[],
    applicationDetails: application,
    isDetailsOpen: boolean
}

const initialState: TrackerState = {
    applications: [],
    applicationDetails: data[0],
    isDetailsOpen: false
}

export const getApplication = createAsyncThunk(
    'tracker/getApplication',
    async () => {
        const applications = await trackerService.getApplications()
        return applications
    }
)

export const addApplication = createAsyncThunk(
    'tracker/addApplication',
    async (application: draftApplication) => {
        const updatedApplication = await trackerService.addApplication(application)
        return updatedApplication
    }
)

export const trackerSlice = createSlice({
    name: 'tracker',
    initialState,
    reducers: {
        // addApplication: (state, action: PayloadAction<application>) => {
        //     // state.applications.unshift(action.payload)
        //     trackerService.addApplication(action.payload)
        // },
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
    },
    extraReducers: (builder) => {
        builder
            .addCase(getApplication.fulfilled, (state, action) => {
                state.applications = [...action.payload]
            })
            .addCase(addApplication.fulfilled, (state, action: PayloadAction<application>) => {
                state.applications.unshift(action.payload)
            })
    }
})




export const {
    removeApplication,
    toggleApplicationDetails,
    setCurrentApplicationDetails } = trackerSlice.actions

export default trackerSlice.reducer;