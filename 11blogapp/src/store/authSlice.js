import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status: false,
    userData: null
};  //initial state of the authslice 

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action) => {  // state authslice ke current state ko refer karta hai and action ke ander wo sab hai jo aap bhej rahe hai aur same name ke sath accessible bhi hai
            state.status = true;
            state.userData = action.payload.userData;
        },
        logout: (state) => {
            state.status = false;
            state.userData = null;
        }
    }
});

export const { login, logout } = authSlice.actions;  //we need to export every thing in the reducer exclusively so that they can be accessed whenevr required

export default authSlice.reducer;  //inside the authSlice it is reducers but here we use reducer only
