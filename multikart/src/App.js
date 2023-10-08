import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './app/pages/Cart';



function App() {
  return (
    <BrowserRouter>
    <Cart/>
    </BrowserRouter>
    
  );
}

export default App;
