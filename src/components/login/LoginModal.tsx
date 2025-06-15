import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '../../store/store';
import { closeModal, login } from '../../store/store';
import './LoginModal.css';


function LoginModal() {
  const dispatch = useDispatch();
  // const isOpen = useSelector((state: RootState) => state.modal.isModalOpen);
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Кирген болсо модалды көрсөтпө
  if (isLoggedIn) return null;

  const handleLogin = () => {
    if (email === 'satarov88@gmail.com' && password === '2007') {
      dispatch(login());
    } else {
      alert('Туура эмес Email же Пароль');
    }
  };

  const handleClose = () => {
    dispatch(closeModal());
  };

  return (
    <div className="modal-backdrop" onClick={handleClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <h2>Авторизация</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Пароль"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Вход</button>
      </div>
    </div>
  );
}

export default LoginModal;
