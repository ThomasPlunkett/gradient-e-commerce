import React, { useContext, useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { ProductsContext } from "../../context/Products-Context";
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
};
