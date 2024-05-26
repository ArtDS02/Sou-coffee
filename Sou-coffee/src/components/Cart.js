import React from 'react';
import './Cart.css'; 

const Cart = ({ cartItems, removeFromCart }) => {
  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.totalPrice, 0);
  };

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cartItems.map((item, index) => (
          <div key={index} className="cart-item">
            <span>{item.product.name}</span>
            <span>Quantity: {item.quantity}</span>
            <span>Total Price: {item.totalPrice}</span>
            <button onClick={() => removeFromCart(index)}>Remove</button>
          </div>
        ))
      )}
      {cartItems.length > 0 && (
        <div className="cart-total">
          <h3>Total: {getTotalPrice()}</h3>
        </div>
      )}
    </div>
  );
};

export default Cart;
