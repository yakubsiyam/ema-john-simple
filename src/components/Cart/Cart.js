import React from "react";

const Cart = ({ cart }) => {
  return (
    <div>
      <h3 className="mt-5 text-center">Order Summary</h3>
      <p>{cart.length}</p>
    </div>
  );
};

export default Cart;
