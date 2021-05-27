import React, { useContext } from "react";
import Layout from "../../shared/Layout";
import Featured from "../../shared/Featured/Featured-Product";
import { ProductsContext } from "../../../context/Products-Context";
import "./Shop.scss";

const Shop = () => {
  const { products } = useContext(ProductsContext);
  const allProducts = products.map((product) => (
    <Featured {...product} key={product.id} />
  ));
  return (
    <Layout>
      <div className="product-list-container">
        <h2 className="product-list-title">Shop</h2>
        <div className="product-list">{allProducts}</div>
      </div>
    </Layout>
  );
};

export default Shop;