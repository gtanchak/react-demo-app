import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";

import { clearCart } from "../store/cartSlice";

const Cart = () => {
  const { cartItems } = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  return (
    <div className="container mx-auto">
      <div className="flex items-center justify-between">
        <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-teal-900">
          Cart
        </h1>
        <button
          className="bg-teal-900 text-white px-3 py-2 rounded-md text-sm"
          onClick={() => dispatch(clearCart())}
        >
          Clear Cart
        </button>
      </div>
      <p className="text-center mt-5 text-gray-500">
        {cartItems.length <= 0 && "Cart item is empty"}
      </p>
      <ItemList itemCards={cartItems} />
    </div>
  );
};

export default Cart;
