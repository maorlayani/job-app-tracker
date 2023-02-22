import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { data } from '../../data/data'
import { Application, DraftApplication, FilterBy, FilterModal } from '../../modules/interfaces'
import { trackerService } from '../../services/tracker.service'

interface TrackerState {
    applications: Application[],
    applicationDetails: Application,
    isDetailsOpen: boolean,
    filterBy: FilterBy,
    filterModal: FilterModal,
    isLoading: boolean
}

const initialState: TrackerState = {
    applications: [],
    applicationDetails: data[0],
    isDetailsOpen: false,
    filterBy: {
        position: [],
        location: [],
        status: [],
        serachInput: ''
    },
    filterModal: { isModalOpen: false, type: '' },
    isLoading: false
}

export const getApplication = createAsyncThunk(
    'tracker/getApplication',
    async (arg, { getState }) => {
        const { tracker } = getState() as { tracker: TrackerState }
        const applications = await trackerService.getApplications(tracker.filterBy)
        return applications
    }
)

export const addApplication = createAsyncThunk(
    'tracker/addApplication',
    async (application: DraftApplication) => {
        const addedApplication = await trackerService.saveApplication(application)
        return addedApplication
    }
)

export const updateApplication = createAsyncThunk(
    'tracker/updateApplication',
    async (application: Application) => {
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

// export const setFilterBy = createAsyncThunk(
//     'tracker/setFilterBy',
//     async (filterBy: FilterBy) => {
//         console.log('getapp', filterBy);

//         // await getApplication()
//         // await trackerService.getApplications(filterBy)
//         return filterBy
//     }
// )

export const trackerSlice = createSlice({
    name: 'tracker',
    initialState,
    reducers: {
        setCurrentApplicationDetails: (state, action) => {
            state.applicationDetails = action.payload
        },
        toggleApplicationDetails: (state) => {
            state.isDetailsOpen = !state.isDetailsOpen
        },
        setFilterBy: (state, action: PayloadAction<FilterBy>) => {
            state.filterBy = { ...state.filterBy, ...action.payload }
        },
        toggleFilterModal: (state, action: PayloadAction<FilterModal>) => {
            state.filterModal = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getApplication.fulfilled, (state, action) => {
                state.applications = [...action.payload]
            })
            .addCase(addApplication.pending, (state) => {
                state.isLoading = true
            })
            .addCase(addApplication.fulfilled, (state, action: PayloadAction<Application>) => {
                state.applications.unshift(action.payload)
                state.isLoading = false
            })
            .addCase(updateApplication.fulfilled, (state, action: PayloadAction<Application>) => {
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
    setFilterBy,
    toggleFilterModal,
    toggleApplicationDetails,
    setCurrentApplicationDetails } = trackerSlice.actions

export default trackerSlice.reducer;