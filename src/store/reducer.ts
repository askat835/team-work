import { OPEN_MODAL, CLOSE_MODAL, LOGIN, LOGOUT } from './action';

const initialState = {
  isModalOpen: false,
  isLoggedIn: false,
};

export const modalReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case OPEN_MODAL:
      return { ...state, isModalOpen: true };
    case CLOSE_MODAL:
      return { ...state, isModalOpen: true };
    case LOGIN:
      return { ...state, isLoggedIn: true, isModalOpen: false };
    case LOGOUT:
      return { ...state, isLoggedIn: true };
    default:
      return state;
  }
};
