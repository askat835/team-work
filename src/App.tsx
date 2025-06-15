import { useSelector } from 'react-redux';
import type { RootState } from './store/store';
import ResponsiveAppBar from './components/Header';
import LoginModal from './components/login/LoginModal';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/Home';
import Product from './pages/Product';
import Companies from './pages/Companies';
import Basket from './pages/Basket';
import Contact from './pages/Contact';

function App() {
  // const isModalOpen = useSelector((state: RootState) => state.modal.isModalOpen);
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);

  return (
    <>
      {/* Логин болбосо модал чыгат, болбосо сайт */}
      {!isLoggedIn ? (
        <LoginModal />
      ) : (
        <>
          <ResponsiveAppBar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/Product" element={<Product />} />
            <Route path="/Companies" element={<Companies />} />
            <Route path="/Basket" element={<Basket />} />
            <Route path="/Contact" element={<Contact />} />
          </Routes>
        </>
      )}
    </>
  );
}

export default App;
