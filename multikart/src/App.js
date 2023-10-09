import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './app/pages/Cart';
import Wishlist from './app/pages/Wishlist';
import Checkout from './app/pages/Checkout';



function App() {
  return (
    <BrowserRouter>
    <Cart/>
    <Wishlist />
    <Checkout />
    </BrowserRouter>
    
  );
}

export default App;
