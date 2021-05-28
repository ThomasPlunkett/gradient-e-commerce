import React, { useContext } from "react";
import { isInCart } from '../../helpers';
import { CartContext } from '../../cart-context';
import { withRouter } from "react-router-dom";
import "./Featured.scss";

const FeaturedProduct = (props) => {
  const { id, title, imageUrl, price, history } = props;
  const product = { id, title, imageUrl, price, history };
  const { addProduct, cartItems, increase } = useContext(CartContext);
  const itemInCart =
  return (
    <div className="featured">
      <div
        className="featured-image"
        onClick={() => history.push(`/product/${id}`)}>
        <img src={imageUrl} alt="product" />
      </div>
      <div className="name-price">
        <h3> {title}</h3>
        <p> ${price}</p>
        {
          !itemInCart && 
          <button 
            className="button is-black nomad-btn"
            onClick={() => addProduct(product)}>
              Add to Cart</button>
        }
        {
          itemInCart &&
          <button 
            className="button is-black nomad-btn"
            id='btn-white-outline'
            onClick={()=> increase(product)}>
              Add More </button>
        }
      </div>
    </div>
  );
};

export default withRouter(FeaturedProduct);
