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
    [logOut.fulfilled](state) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
    [refreshUser.pending](state) {
      state.isRefreshing = true;
    },
    [refreshUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isRefreshing = false;
    },
    [refreshUser.rejected](state) {
      state.isRefreshing = false;
    },
    [register.pending](state, action) {
      state.isRefreshing = true;
    },
    [register.rejected](state, action) {
      state.error = action.payload;
      state.isRefreshing = false;
    },
    [logIn.pending](state, action) {
      state.isRefreshing = true;
    },
    [logIn.rejected](state, action) {
      state.error = action.payload;
      state.isRefreshing = false;
    },
  },
});

export const authReducer = authSlice.reducer;
