import { createSlice } from "@reduxjs/toolkit";

const storedUser = JSON.parse(localStorage.getItem("user"));

export const userSlice = createSlice({
    name:"user",
    initialState:{
        user:null||storedUser
    },
    reducers: {
        login : (state,action)=> {
            state.user = action.payload
            localStorage.setItem("user", JSON.stringify(action.payload));
        },
        signUp : (state,action)=> {
            state.user = action.payload
            localStorage.setItem("user", JSON.stringify(action.payload));
        },
        logout : (state)=>{
            state.user = null
            localStorage.removeItem("user");
        }
    }
})

export const {signUp,login,logout} = userSlice.actions

export const selectUser = (state)=> state.user.user

export default userSlice.reducer