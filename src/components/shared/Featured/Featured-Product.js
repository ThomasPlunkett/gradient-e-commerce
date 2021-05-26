import React from "react";
import "./Featured.scss";

const FeaturedProduct = (product) => {
  const { title, imageUrl, price } = product;

  return (
    <div className="featured">
      <div className="featured-image">
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
export default FeaturedProduct;
