
import Header from './components/Header';
import Footer from './components/Footer';
import LoginForm from './components/LoginForm';
import Navbar from './components/Navbar';
import WhiteLabel from './components/WhiteLabel';
import Services from './components/Services';
import ResetPasswordPage from './components/ResetPasswordPage';
import ProfilePage from './components/ProfilePage';
import PaymentPage from './components/PaymentPage';
import ProductInfo from './components/ProductInfo';
import CartPage from './components/CartPage';
import CheckoutPage from './components/CheckoutPage';
import Home from "./components/Home";
import ProductsPage from './components/ProductsPage';
import SignupForm from './components/SignupForm';
import Hero from './components/Hero';

import React from 'react'
import PageIcons from './components/PageIcons'
// import FeaturedProducts from './components/FeaturedProducts'
import Offers from './components/Offers'
import Trial from './components/Trial'


import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './components/About';
import Contact from './components/Contact';
import OTPPage from './components/OtpPage';


function App() {
  return (
    <div>
      <Header/>
      <BrowserRouter>
  <Routes>
      
    <Route exact path="/" element={<Home/>}/>
    <Route exact path="/Home" element={<Home/>}/>
    <Route exact path="/products" element={<ProductsPage/>}/>
    <Route exact path="/register" element={<SignupForm/>}/>
    <Route exact path="/cart" element={<CartPage/>}/>
    <Route exact path="/otp" element={<OTPPage/>}/>
    <Route exact path="/login" element={<LoginForm/>}/>
    <Route exact path="/services" element={<Services/>}/>
    <Route exact path="/checkout" element={<CheckoutPage/>}/>
    <Route exact path="/contact" element={<Contact/>}/>
    <Route exact path="/services" element={<Services/>}/>
    <Route exact path="/about" element={<About/>}/>
     
    </Routes>
    </BrowserRouter>
      <Footer/>
    </div>
  )
}

export default App