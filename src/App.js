import React, { useState, useEffect } from 'react';

import "./App.scss";
import Navbars from "./components/Navbars/Navbars";
import Footer from "./components/Footer/Footer";
// import Home from "./screens/Home/Home";
import ProductDetail from "./screens/ProductDetail/ProductDetail";

function App() {

  return (
     <>
      <Navbars />

      <ProductDetail />

      <Footer />
    </>
  );
}

export default App;
