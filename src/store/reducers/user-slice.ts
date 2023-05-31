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
        console.log('from slicer', user);
        return user
    }
)

export const login = createAsyncThunk(
    'user/login',
    async (userCred: UserCredentials) => {
        const user = await userService.login(userCred)
        console.log('from slicer', user);
        return user
    }
)

export const logout = createAsyncThunk(
    'user/logout',
    async (sessionId: string) => {
        await userService.logout(sessionId)
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
            .addCase(logout.fulfilled, (state) => {
                state.user = null
            })
    }
})

export default userSlice.reducer