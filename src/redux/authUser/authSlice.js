import { createSlice } from '@reduxjs/toolkit';
import authOperations from './authOperation';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isError: null,
  isFetchingCurrentUser: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [authOperations.register.fulfilled]: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.isError = null;
    },

    [authOperations.logIn.fulfilled]: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.isError = null;
    },

    [authOperations.logOut.fulfilled]: state => {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },

    [authOperations.fetchCurrentUser.pending]: state => {
      state.isFetchingCurrentUser = true;
    },

    [authOperations.fetchCurrentUser.fulfilled]: (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isError = null;
      state.isFetchingCurrentUser = false;
    },
    [authOperations.fetchCurrentUser.rejected]: (state, action) => {
      state.isError = action.payload;
      state.isFetchingCurrentUser = false;
    },
  },
});

// Reducer
export const authReducer = authSlice.reducer;
