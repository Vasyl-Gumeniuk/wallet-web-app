import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: { name: '', email: '' },
  token: null,
  isLoggedIn: false,
};

export const authSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {
    registerUser(state, action) {
      state.user = action.payload.data.user;
      state.token = action.payload.data.access_token;
    },
    logInUser(state, action) {
      state.user = action.payload.data.user;
      state.token = action.payload.data.access_token;
      state.isLoggedIn = true;
    },
    logOutUser(state) {
      state.user = { name: '', email: '' };
      state.token = null;
      state.isLoggedIn = false;
    },

    fetchUser(state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
    },
  },
});

export const { registerUser, logInUser, logOutUser, fetchUser } =
  authSlice.actions;
