import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { MinUser, User, UserCredentials } from "../../models/interfaces";
import { userService } from "../../services/user.service";

interface UserState {
    user: MinUser | null
}

const initialState: UserState = {
    user: null
}

export const signup = createAsyncThunk(
    'user/signup',
    async (userCred: User) => {
        const user: MinUser | null = await userService.signup(userCred)
        return user
    }
)

export const login = createAsyncThunk(
    'user/login',
    async (userCred: UserCredentials) => {
        const user = await userService.login(userCred)
        return user
    }
)

export const logout = createAsyncThunk(
    'user/logout',
    async (sessionId: string) => {
        await userService.logout(sessionId)
    }
)


export const updateUser = createAsyncThunk(
    'user/update',
    async (userUpdetedDetails: { field: string, updatedValue: string, currnetPassword: string }) => {
        const user = await userService.UpdateUser(userUpdetedDetails.field, userUpdetedDetails.updatedValue, userUpdetedDetails.currnetPassword)
        return user
    }
)

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(signup.fulfilled, (state, action: PayloadAction<MinUser | null>) => {
                state.user = action.payload
            })
            .addCase(signup.rejected, (state) => {
                state.user = null
            })
            .addCase(login.fulfilled, (state, action: PayloadAction<MinUser | null>) => {
                state.user = action.payload
            })
            .addCase(login.rejected, (state) => {
                state.user = null
            })
            .addCase(logout.fulfilled, (state) => {
                state.user = null
            })
            .addCase(updateUser.fulfilled, (state, action) => {
                if (action.payload && state.user) state.user = {
                    ...state.user,
                    ...action.payload
                }
                else state.user = null
            })
            .addCase(updateUser.rejected, (state) => {
                state.user = null
            })
    }
})

export default userSlice.reducer