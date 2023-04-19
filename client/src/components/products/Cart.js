import React from "react";

function Cart() {
  const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

  return (
    <div>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              {item.name} - {item.price} - {item.quantity}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Cart;