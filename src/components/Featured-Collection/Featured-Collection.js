import React, { useContext } from "react";
import { ProductsContext } from "../../context/Products-Context";
import FeaturedProduct from "../shared/Featured/Featured-Product";
import "./Featured-Collection.scss";

const FeaturedCollection = () => {
  const { products } = useContext(ProductsContext);
  const productItems = products
    .filter((product, i) => i < 4)
    .map((product) => <FeaturedProduct {...product} key={product.id} />);
  return (
    <div className="featured-collection ">
      <h2 className="featured-section-title">Featured Collection </h2>
      <div className="products">{productItems}</div>
    </div>
  );
};

export default FeaturedCollection;
