import { logIn, logOut, refreshUser, register } from './operations.js';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  //   initialState: initialState, // not necessary
  initialState,
  extraReducers: {
    // FULFILLED
    [register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [logIn.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.isRefreshing = false;
    },
    [refreshUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isRefreshing = false;
    },
    [logOut.fulfilled](state) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },

    // PENDING
    [register.pending](state, action) {
      state.isRefreshing = true;
    },
    [logIn.pending](state, action) {
      state.isRefreshing = true;
    },
    [refreshUser.pending](state) {
      state.isRefreshing = true;
    },

    // REJECTED
    [register.rejected](state, action) {
      state.error = action.payload;
      state.isRefreshing = false;
    },
    [logIn.rejected](state, action) {
      state.error = action.payload;
      state.isRefreshing = false;
    },
    [refreshUser.rejected](state) {
      state.isRefreshing = false;
    },
  },
});

export const authReducer = authSlice.reducer;
