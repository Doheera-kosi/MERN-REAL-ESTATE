import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  error: null,
  loading: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signInStart: (state) => {
      state.loading = true;
    },

    signInSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.loading = false;
      state.error = null;
    },

    signInFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },

    updateUserStart: (state) => {
      state.loading = true;
    },
    updateuserSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.loading = false;
      state.error = null;
    },
    updateUserFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },

    deleteUserStart: (state) => {
      state.loading = null
    },

    deleteUserSuccess: (state) => {
      state.currentUser = null;
      state.loading = null;
      state.error = null
    },

    deleteUserFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },

    signOutUserStart: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },

    signOutUserSuccess: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },

    signOutUserFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },


  },
});

export const {
  signInStart,
  signInSuccess,
  signInFailure,
  
  updateUserStart,
  updateuserSuccess,
  updateUserFailure,

  deleteUserStart,
  deleteUserFailure,
  deleteUserSuccess,

  signOutUserStart,
  signOutUserSuccess,
  signOutUserFailure,
} = userSlice.actions;

export default userSlice.reducer;
