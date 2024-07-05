import { createSlice } from "@reduxjs/toolkit";

const initialState={
    inputValues:{},
 
}

const VoiceTotextSlice=createSlice({
    name:"createRoom",
    initialState:initialState,
    reducers:{

        value:(state,action)=>{
            state.inputValues=action.payload
        }

    }
})

export default VoiceTotextSlice.reducer;

export const{value}=VoiceTotextSlice.actions;
