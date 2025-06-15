// src/store/store.ts
import { configureStore, createSlice } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import modalReducer from './modalSlice';
interface ModalState {
  isModalOpen: boolean;
}

interface AuthState {
  isLoggedIn: boolean;
}

const initialModalState: ModalState = {
  isModalOpen: true,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState: initialModalState,
  reducers: {
    openModal: (state) => {
      state.isModalOpen = true;
    },
    closeModal: (state) => {
      state.isModalOpen = false;
    },
  },
});

const initialAuthState: AuthState = {
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: initialAuthState,
  reducers: {
    login: (state) => {
      state.isLoggedIn = true;
    },
    logout: (state) => {
      state.isLoggedIn = false;
    },
  },
});


export const { openModal, closeModal } = modalSlice.actions;
export const { login, logout } = authSlice.actions;

export const store = configureStore({
  reducer: {
    auth: authReducer,
    modal: modalReducer,

  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
