import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './app/pages/Cart';
import Wishlist from './app/pages/Wishlist';
import Checkout from './app/pages/Checkout';
import Footer from './app/pages/Footer';
import Login from './app/pages/Login';


function App() {
  return (
    <div>
    <BrowserRouter>
    <Cart/>
    <Wishlist />
    <Checkout />
    <Login/>
    </BrowserRouter>
    <Footer/>

    </div>
  );
}

export default App;
