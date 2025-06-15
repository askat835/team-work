// action түрлөрү
export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';

// action'дар
export const openModal = () => ({
  type: OPEN_MODAL,
});

export const closeModal = () => ({
  type: CLOSE_MODAL,
});

export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

export const login = () => ({ type: LOGIN });
export const logout = () => ({ type: LOGOUT });