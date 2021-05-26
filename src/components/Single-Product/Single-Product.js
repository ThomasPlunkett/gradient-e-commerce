import React, { useContext, useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { ProductsContext } from "../../context/Products-Context";
// Couldn't remember if we were sticking with the layout component or not, just imported it to be safe, it's used in the jsx as well but we can always swap it out no problem if not
import Layout from "../shared/Layout";
import "./SingleProduct.scss";

const SingleProduct = ({ match, history: { push } }) => {
  const { products } = useContext(ProductsContext);
  const { id } = match.params;
  const [product, setProduct] = useState(null);
  useEffect(() => {
    const product = products.find((item) => Number(item.id) === Number(id));

    if (!product) {
      //    this route name is just what the instructions said, just make sure it's routed to Emily's product/shop page
      return push("/shop");
    }

    setProduct(product);
  });

  const { imageUrl, title, price, description } = product;
  return (
    <Layout>
      <div className="single-product-container">
        <div className="product-image">
          <img src={imageUrl} alt="product" />
        </div>
        <div className="product-details">
          <div className="name-price">
            <h3>{title}</h3>
            <p>{price}</p>
          </div>
          <div className="add-to-cart-buttons">
            <button className="button is-white nomad-btn" id="btn-gray-outline">
              Add to Cart
            </button>
            <button
              className="button is-black nomad-btn"
              id="btn-white-outline"
            >
              Checkout
            </button>
          </div>
          <p>{description}</p>
        </div>
      </div>
    </Layout>
  );
};

export default withRouter(SingleProduct);
