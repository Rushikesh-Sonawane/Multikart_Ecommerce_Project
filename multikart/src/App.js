import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './app/pages/Cart';
import Wishlist from './app/pages/Wishlist';
import Checkout from './app/pages/Checkout';
import Footer from './app/pages/Footer';


function App() {
  return (
    <div>
    <BrowserRouter>
    <Cart/>
    <Wishlist />
    <Checkout />
    </BrowserRouter>
    <Footer/>
    </div>
  );
}

export default App;
