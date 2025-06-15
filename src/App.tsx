import './App.css'
import ResponsiveAppBar from './components/Header'
import Basket from './pages/basket'
import Companies from './pages/Companies'
import HomePage from './pages/Home'
import Product from './pages/Product'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <ResponsiveAppBar />
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/Product" element={<Product />} />
        <Route path='/Companies' element ={<Companies />} />
         <Route path='/Basket' element ={<Basket />} />
      </Routes>
    </>
  )
}

export default App
