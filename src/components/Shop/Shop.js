import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("./products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleToAddCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
  };

  return (
    <div>
      <div className="row">
        {/* products */}
        <div className="col-md-9 p-5">
          <div className="row g-4">
            {products.map((product) => (
              <Product
                key={product.id}
                product={product}
                handleToAddCart={handleToAddCart}
              ></Product>
            ))}
          </div>
        </div>

        {/* cart */}
        <div className="col-md-3 bg-cart">
          <Cart cart={cart}></Cart>
        </div>
      </div>
    </div>
  );
};

export default Shop;
