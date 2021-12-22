import React from "react";
import "./CategoryDetail.scss";

import { BsSuitHeart } from "react-icons/bs";

function CategoryDetail() {
  return (
    <>
      <h2 className="text-center mt-4">Elektronik</h2>
      <p className="border-top mt-5"></p>
      <div className="wrapper">
        <Card
          img="https://image.api.playstation.com/vulcan/ap/rnd/202106/1704/JzL1NLQvok7Pghe9W5PP2XNV.png"
          title="Urun ADı"
          description="Kategori"
          price="45.00"
        />
        <Card
          img="https://images.alphacoders.com/111/thumb-1920-1114657.jpg"
          title="Urun ADı"
          description="Kategori"
          price="29.95"
        />
        <Card
          img="https://images.alphacoders.com/111/thumb-1920-1114657.jpg"
          title="Urun ADı"
          description="Kategori"
          price="29.95"
        />
        <Card
          img="https://images.alphacoders.com/111/thumb-1920-1114657.jpg"
          title="Urun ADı"
          description="Kategori"
          price="29.95"
        />{" "}
        <Card
          img="https://images.alphacoders.com/111/thumb-1920-1114657.jpg"
          title="Urun ADı"
          description="Kategori"
          price="29.95"
        />
        <Card
          img="https://images.alphacoders.com/111/thumb-1920-1114657.jpg"
          title="Urun ADı"
          description="Kategori"
          price="29.95"
        />
        <Card
          img="https://images.alphacoders.com/111/thumb-1920-1114657.jpg"
          title="Urun ADı"
          description="Kategori"
          price="29.95"
        />
        <Card
          img="https://images.alphacoders.com/111/thumb-1920-1114657.jpg"
          title="Urun ADı"
          description="Kategori"
          price="29.95"
        />
        <Card
          img="https://images.alphacoders.com/111/thumb-1920-1114657.jpg"
          title="Urun ADı"
          description="Kategori"
          price="29.95"
        />
        <Card
          img="https://images.alphacoders.com/111/thumb-1920-1114657.jpg"
          title="Urun ADı"
          description="Kategori"
          price="29.95"
        />
      </div>
    </>
  );
}

function Card(props) {
  return (
    <div className="card">
      <img src={props.img} className="card__img" />
      <div className="card__body">
        <h2 className="card__title">{props.title}</h2>
        <p className="card__description">{props.description}</p>
        <h3 className="card__price">{props.price}</h3>
        <button className="card__btn">
          <BsSuitHeart />
        </button>
      </div>
    </div>
  );
}

export default CategoryDetail;
