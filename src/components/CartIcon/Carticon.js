import React, { useContext } from "react";
import cartImg from "../../assets/shopping-cart (3).png";
import { CartContext } from "../../context/cart-context";
import "./CartIcon.scss";

const CartIcon = () => {
  const { itemCount, cartItems } = useContext(CartContext);
  console.log('CartItems', cartItems);
  return (
    <div className="cart-container">
      <img src={cartImg} alt="shopping cart png"></img>
      {
        itemCount > 0 ? <span className="cart-count"> { itemCount } </span>: null
      }
      
    </div>
  );
};

export default CartIcon;