import React, { useContext } from 'react';
import { withRouter } from 'react-router-dom';
import shoppingBag from '../../assets/shopping-cart (3).png';
import "./CartIcon.scss";
import { CartContext } from '../../context/cart-context';
import '../../components/CartIcon/Home/index';

const CartIcon = ({ history }) => {
  const { itemCount, cartItems } = useContext(CartContext);
  console.log('CartItems:', cartItems);
  return (
    <div className='cart-container' onClick={() => history.push('/cart')}>
      <img src={shoppingBag} alt='shopping-cart-icon' />
      {
        itemCount > 0 ? <span className='cart-count'> { itemCount } </span> : null
      }
      
    </div>
  );
}

export default withRouter(CartIcon);