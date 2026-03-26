import { createSlice } from "@reduxjs/toolkit";

interface UserState {
    name: string
    isLogin: boolean
}

const initialState: UserState = {
    name: 'Guest',
    isLogin: false
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login: (state) => { state.isLogin = true, state.name = 'User' },
        logout: (state) => { state.isLogin = false, state.name = 'Guest' }
    }
})

export const { login, logout } = userSlice.actions;
export default userSlice