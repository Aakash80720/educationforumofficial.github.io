import { createSlice } from "@reduxjs/toolkit";

export const users = createSlice({
    name:"user",
    initialState:{
        useris : null,
    },
    reducers:{
        login:(state,action) =>{
            state.useris = action.payload
            console.log(state.useris)
        },
        logout:(state)=>{
            state.useris = null
        }
    }
})
export const { login,logout } = users.actions
export const selectUser = (state) => state.user.useris
export default users.reducer;