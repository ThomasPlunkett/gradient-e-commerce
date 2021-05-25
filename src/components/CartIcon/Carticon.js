import React from "react";
import cartImg from "../../assets/shopping-cart (3).png";
import "./CartIcon.scss";

const CartIcon = () => {
  return (
    <div className="cart-container">
      <img src={cartImg} alt="shopping cart png"></img>
      <span className="cart-count"> QUANTITY</span>
    </div>
  );
};
export default CartIcon;
