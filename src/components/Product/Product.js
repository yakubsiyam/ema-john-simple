import React from "react";
import "./Product.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Product = ({ product, handleToAddCart }) => {
  const { img, name, price, seller, ratings } = product;
  return (
    <div className="col-md-4">
      <div className="card h-100">
        <img src={img} className="card-img-top" alt="products img here" />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">Price: ${price}</p>
          <small>Manufacturer: {seller}</small> <br />
          <small>Rating: {ratings} star</small>
        </div>
        <button
          className="border border-0 bg-cart-btn card-footer text-center"
          onClick={() => {
            handleToAddCart(product);
          }}
        >
          Add to Cart
          <FontAwesomeIcon icon={faShoppingCart} />
        </button>
      </div>
    </div>
  );
};

export default Product;
