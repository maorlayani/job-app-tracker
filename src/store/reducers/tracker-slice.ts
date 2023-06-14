import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Application, DraftApplication, FilterBy, FilterModal, Technology } from '../../models/interfaces'
import { trackerService } from '../../services/tracker.service'

interface TrackerState {
    applications: Application[],
    applicationDetails: Application,
    isDetailsOpen: boolean,
    filterBy: FilterBy,
    filterModal: FilterModal,
    loading: {
        isLoading: boolean,
        type: string
    },
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
    loading: { isLoading: false, type: '' },
    technologies: [],
    techSearch: '',
    location: [],
    position: []
}

export const getApplication = createAsyncThunk(
    'tracker/getApplication',
    async (JWT: string | undefined, { getState }) => {
        const { tracker } = getState() as { tracker: TrackerState }
        let applications: Application[] = await trackerService.getApplications(tracker.filterBy, JWT)
        applications = applications.sort((a, b) => b.submittedAt - a.submittedAt)
        return applications
    }
)

export const addApplication = createAsyncThunk(
    'tracker/addApplication',
    async (playload: { application: DraftApplication, JWT: string | undefined }) => {
        const addedApplication = await trackerService.saveApplication(playload.application, playload.JWT)
        return addedApplication
    }
)

export const updateApplication = createAsyncThunk(
    'tracker/updateApplication',
    async (playload: { application: Application, JWT: string | undefined }) => {
        const updatedApplication = await trackerService.saveApplication(playload.application, playload.JWT)
        // console.log('updatedApplication', updatedApplication);
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
        resetApplications: (state) => {
            state.applications = []
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
        },
        setLoading: (state, action: PayloadAction<{ type: string, isLoading: boolean }>) => {
            state.loading = { type: action.payload.type, isLoading: action.payload.isLoading }
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getApplication.fulfilled, (state, action: PayloadAction<Application[]>) => {
                state.applications = [...action.payload]
                state.loading = { isLoading: false, type: 'get' }
            })
            .addCase(getApplication.pending, (state, action) => {
                state.loading = { isLoading: true, type: 'get' }
                // state.applications = []
            })
            .addCase(addApplication.pending, (state) => {
                state.loading = { isLoading: true, type: 'add' }
            })
            .addCase(addApplication.fulfilled, (state, action: PayloadAction<Application>) => {
                state.applications.unshift(action.payload)
                state.loading = { isLoading: false, type: 'add' }
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
    setPosition,
    resetApplications,
    setLoading } = trackerSlice.actions

export default trackerSlice.reducer;