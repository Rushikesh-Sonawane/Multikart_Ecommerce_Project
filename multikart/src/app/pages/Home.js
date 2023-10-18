import React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "../Component/Header";
import Footer from "./Footer";
import Cart from "./Cart";
import LogoLine from "./LogoLine";
import CarouselHomePage from "./CarouselHomePage";





function Home() {
  return (
    <div>
      <CarouselHomePage/>
    <LogoLine/>
    </div>
  );
}

export default Home;
