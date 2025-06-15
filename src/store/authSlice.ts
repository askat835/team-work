// src/store/authSlice.ts
import { createSlice } from '@reduxjs/toolkit';

interface AuthState {
  isLoggedIn: boolean;
}

const initialState: AuthState = {
  isLoggedIn: localStorage.getItem('loggedIn') === 'true',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state) => {
      state.isLoggedIn = true;
      localStorage.setItem('loggedIn', 'true');
    },
    logout: (state) => {
      state.isLoggedIn = false;
      localStorage.removeItem('loggedIn');
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
