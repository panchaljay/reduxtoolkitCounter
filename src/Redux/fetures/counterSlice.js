import  { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name:"counter",
    initialState:{
        counter:0
     },
    reducers:{
        increment:(state)=>{
            state.counter += 1
        },
        decrement:(state)=>{
            state.counter -= 1
        },
        incrementby:(state,action)=>{
            state.counter += action.payload
        },
        decrementby:(state,action)=>{
            state.counter -= action.payload
        }
    }
})

export  const {increment,decrement,incrementby,decrementby} = counterSlice.actions
export default counterSlice.reducer