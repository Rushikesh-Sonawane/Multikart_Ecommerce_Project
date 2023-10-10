import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './app/pages/Cart';
import Wishlist from './app/pages/Wishlist';
import Checkout from './app/pages/Checkout';
import Footer from './app/pages/Footer';
import Login from './app/pages/Login';
import Header from './app/Component/Header'
import LogoLine from './app/pages/LogoLine';


function App() {
  return (
    <div>
      <Header/>
    <BrowserRouter>
    <Cart/>
    <Wishlist />
    <Checkout />
    <Login/>
    <LogoLine/>
    </BrowserRouter>
    <Footer/>


    </div>
  );
}

export default App;
