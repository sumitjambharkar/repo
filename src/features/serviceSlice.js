import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


// Read Action
export const getAllData = createAsyncThunk("service",async()=>{
    try {
        const result = await fetch('/home-page')
        const response = result.json()
         return response
    } catch (error) {
        console.log(error);
    }
})

export const getData = createAsyncThunk("service",async(category)=>{
    try {
        const result = await fetch(`/category-page/${category}`)
        const response = result.json()
         return response
    } catch (error) {
        console.log(error);
    }
})



export const serviceSlice = createSlice({
    name:"service",
    initialState:{
        service:[],
        loading:false,
        error:null,
    },
    extraReducers:{
        [getAllData.pending]:(state)=>{
            state.loading = true
        },
        [getAllData.fulfilled]:(state,action)=>{
            state.loading = false;
            state.service = action.payload;
        },
        [getAllData.rejected]:(state,action)=>{
            state.loading = false;
            state.error = action.payload;
        }
    }
})


export default serviceSlice.reducer