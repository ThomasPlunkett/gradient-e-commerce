import React from "react";
import { withRouter } from "react-router-dom";
import "./Featured.scss";

const FeaturedProduct = (props) => {
  const { id, title, imageUrl, price, history } = props;

  return (
    <div className="featured">
      <div
        className="featured-image"
        onClick={() => history.push(`/product/${id}`)}
      >
        <img src={imageUrl} alt="product" />
      </div>
      <div className="name-price">
        <h3> {title}</h3>
        <p> ${price}</p>
        <button className="button is-black nomad-btn">Add to Cart</button>
      </div>
    </div>
  );
};

export default withRouter(FeaturedProduct);
