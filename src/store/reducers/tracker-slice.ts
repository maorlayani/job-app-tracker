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
        const addedApplication = await trackerService.saveApplication(application)
        return addedApplication
    }
)

export const updateApplication = createAsyncThunk(
    'tracker/updateApplication',
    async (application: application) => {
        const updatedApplication = await trackerService.saveApplication(application)
        return updatedApplication
    }
)

export const removeApplication = createAsyncThunk(
    'tracker/removeApplication',
    async (applicationId: string) => {
        await trackerService.removeApplication(applicationId)
        return applicationId
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
        // removeApplication: (state, action) => {
        //     state.applications =
        //         state.applications.filter(app => app.id !== action.payload)
        // },
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
            .addCase(updateApplication.fulfilled, (state, action: PayloadAction<application>) => {
                state.applications = state.applications.map(app =>
                    app.id === action.payload.id ? action.payload : app)
            })
            .addCase(removeApplication.fulfilled, (state, action: PayloadAction<any>) => {
                state.applications = state.applications.filter(app =>
                    app.id !== action.payload)
            })
    }
})




export const {
    toggleApplicationDetails,
    setCurrentApplicationDetails } = trackerSlice.actions

export default trackerSlice.reducer;