// !Creating the REDUX-TOOLKIT store
import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./CartSlice";
import reducer from "./CartSlice"

// * ConfigureStore is an function call which receives an object as a parameters  
// !use reducer key word is importent
const store = configureStore({
    reducer:{cart:CartSlice}
    
})

export default store;