import './App.css'
import ResponsiveAppBar from './components/Header'
import HomePage from './pages/Home'
import Product from './pages/Product'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <ResponsiveAppBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product" element={<Product />} />
      </Routes>
    </>
  )
}

export default App
