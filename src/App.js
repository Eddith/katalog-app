import React from 'react';

import "./App.scss";
import Navbars from "./components/Navbars/Navbars";
import Footer from "./components/Footer/Footer";
import Home from "./screens/Home/Home";
import ProductDetail from "./screens/ProductDetail/ProductDetail";
import Favorites from "./screens/Favorites/Favorites";
import CategoryDetail from "./screens/CategoryDetail/CategoryDetail";

import { Route, Routes } from 'react-router-dom';

function App() {

  return (
     <>
      <Navbars />

        <Routes>
          <Route path ="/" element={<Home />}/>
          <Route path ="/productdetail" element={<ProductDetail />} />
          <Route path ="/favorites" element={<Favorites />} />
          <Route path ="/categorydetail" element={<CategoryDetail />} />
        </Routes>

        <div className="mt-5 border-bottom border-bottom"></div>

      <Footer />
    </>
  );
}

export default App;
