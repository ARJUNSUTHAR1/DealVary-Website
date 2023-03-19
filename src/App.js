import React from "react";
import '../src/App.scss'
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Footer from '../src/Components/Footer/Footer'
import {Routes,Route} from 'react-router-dom'
import NewArrivals from "./Components/NewArrivals/NewArrivals";
import Whishlist from "./Components/Wishlist/Whishlist";
import ProductDetail from "./Components/ProductDetail/ProductDetail";
import DProduct from "./Components/DetailProduct/DProduct";

function App() {
  return (
    <>
     <Header />
      <Routes>
        <Route exact path="/" element={<Home />} /> 
        <Route exact path="/wishlist" element={<Whishlist />} /> 
        <Route exact path="/detail" element={<DProduct />} /> 
      </Routes>
      {/* <Footer /> */}
    </>
  );
}

export default App;
