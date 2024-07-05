import { configureStore } from "@reduxjs/toolkit";
import createroomreducer from "./VoiceToTextSlice"
const Store = configureStore({
    reducer:{
        createRoom:createroomreducer,
    }
})

export default Store;