import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import Category from './pages/Category'
import Product from './pages/Product'
import Login from './pages/Login'
import Cart from './pages/Cart'
import Footer from './components/Footer'
import menBanner from './assets/bannermens.png';
import womenBanner from './assets/bannerwomens.png';
import kidsBanner from './assets/bannerkids.png';
import './App.css'

function App() {
  return (
    <main className='bg-primary text-tertiary'>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/mens' element={<Category category='men' banner={menBanner}/>}/>
          <Route path='/womens' element={<Category category='women' banner={womenBanner}/>}/>
          <Route path='/kids' element={<Category category='kid' banner={kidsBanner}/>}/>
          <Route path='/product' element={<Product/>}>
            <Route path=':productId' element={<Product/>}/>
          </Route>
          <Route path='/cart-page' element={<Cart/>}/>
          <Route path='/login' element={<Login/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </main>
  )
}

export default App
