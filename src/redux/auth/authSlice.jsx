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
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    logInUser(state, action) {
      console.log('state', state);
      console.log('action', action.payload.data.access_token);
      state.user = action.payload.user;
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
