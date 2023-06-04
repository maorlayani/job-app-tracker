import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Application, DraftApplication, FilterBy, FilterModal, Technology } from '../../models/interfaces'
import { trackerService } from '../../services/tracker.service'

interface TrackerState {
    applications: Application[],
    applicationDetails: Application,
    isDetailsOpen: boolean,
    filterBy: FilterBy,
    filterModal: FilterModal,
    isLoading: boolean,
    technologies: Technology[]
    techSearch: string,
    location: string[],
    position: string[]
}

const initialState: TrackerState = {
    applications: [],
    applicationDetails: { company: '' } as Application,
    isDetailsOpen: false,
    filterBy: {
        position: [],
        location: [],
        status: [],
        searchInput: ''
    },
    filterModal: { isModalOpen: false, type: '' },
    isLoading: false,
    technologies: [],
    techSearch: '',
    location: [],
    position: []
}

export const getApplication = createAsyncThunk(
    'tracker/getApplication',
    async (arg, { getState }) => {
        const { tracker } = getState() as { tracker: TrackerState }
        let applications: Application[] = await trackerService.getApplications(tracker.filterBy)
        applications = applications.sort((a, b) => b.submittedAt - a.submittedAt)
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
        },
        setTechnologies: (state, action: PayloadAction<Technology[]>) => {
            state.technologies = action.payload
        },
        setTechnologiesSearch: (state, action: PayloadAction<string>) => {
            state.techSearch = action.payload
        },
        setLoaction: (state, action: PayloadAction<string[]>) => {
            state.location = action.payload
        },
        setPosition: (state, action: PayloadAction<string[]>) => {
            state.position = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getApplication.fulfilled, (state, action: PayloadAction<Application[]>) => {
                state.applications = [...action.payload]
            })
            .addCase(getApplication.rejected, (state, action) => {
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
                    app._id === action.payload._id ? action.payload : app)
            })
            .addCase(removeApplication.fulfilled, (state, action: PayloadAction<any>) => {
                state.applications = state.applications.filter(app =>
                    app._id !== action.payload)
            })
    }
})

export const {
    setTechnologiesSearch,
    setTechnologies,
    setFilterBy,
    toggleFilterModal,
    toggleApplicationDetails,
    setCurrentApplicationDetails,
    setLoaction,
    setPosition } = trackerSlice.actions

export default trackerSlice.reducer;