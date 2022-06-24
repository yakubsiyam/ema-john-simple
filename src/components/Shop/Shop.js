import React, { useEffect, useState } from "react";
import Product from "../Product/Product";

const Shop = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("./products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div>
      <div className="row">
        {/* products */}
        <div className="col-md-9 p-5">
          <div className="row g-4">
            {products.map((product) => (
              <Product key={product.key} product={product}></Product>
            ))}
          </div>
        </div>

        {/* cart */}
        <div className="col-md-3 bg-cart">
          <h3 className="mt-5 text-center">Order Summary</h3>
        </div>
      </div>
    </div>
  );
};

export default Shop;
