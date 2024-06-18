import { configureStore } from "@reduxjs/toolkit"
import authSlice from "./authSlice"

const store = configureStore({
    reducer: {
        auth: authSlice,  //reducer is simply a js object and in this way we can pass as much key value pairs as we want and whatever is passed into it, it staets keeping track of it.
    }
})

export default store;  //complete store has to be exported
