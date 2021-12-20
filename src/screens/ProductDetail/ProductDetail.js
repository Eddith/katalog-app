import React from 'react';
import "./ProductDetail.scss"
import { BsSuitHeart } from "react-icons/bs";

function ProductDetail() {
  return (
    <>
        <div className="app">
            <div className="details" key="">
              <div className="big-img">
                <img src="https://wallpaperaccess.com/full/2960437.jpg" alt=""/>
              </div>
              <div className="box">
                <div className="row">
                  <h2>Urun Adı</h2>
                  <span>Kategori</span>
                </div>

                <p>lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</p>
                <p>€50</p>

                <button className="cart"><BsSuitHeart /> Add to Favorites</button>

              </div>
            </div>
      </div>
    </>
  );
}

export default ProductDetail;