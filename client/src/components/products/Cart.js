import React from "react";
import "./Cart.css";

function Cart({ cartItems }) {
  if (!cartItems) {
    return <div>Your cart is empty</div>;
  }
  
  const handleClearCart = () => {
    localStorage.removeItem("cartItems");
    window.location.reload();
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="cart">
      <div className="cart-header">
        <h2>Your Cart</h2>
        <button onClick={handleClearCart}>Clear Cart</button>
      </div>

      <div className="cart-items">
        {cartItems.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          cartItems.map((item) => (
            <div className="cart-item" key={item.id}>
              <img src={item.image} alt={item.name} />
              <div>
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <span>${item.price * item.quantity}</span>
              </div>
              <div>
                <button>-</button>
                <span>{item.quantity}</span>
                <button>+</button>
              </div>
            </div>
          ))
        )}
      </div>

      {cartItems.length > 0 && (
        <div className="cart-total">
          <h3>Total:</h3>
          <span>${getTotalPrice()}</span>
        </div>
      )}
    </div>
  );
}

export default Cart;



/*import React from "react";
import "./Cart.css";

function Cart() {
  const cartItems = JSON.parse(localStorage.getItem("cartItems")) ?? [];

  const handleClearCart = () => {
    localStorage.removeItem("cartItems");
    window.location.reload();
  };

  return (
    <div>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                {item.name} - {item.price} - {item.quantity}
              </li>
            ))}
          </ul>
          <button onClick={handleClearCart}>Clear Cart</button>
        </div>
      )}
    </div>
  );
}

export default Cart;*/





/*import React from "react";

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

export default Cart;*/