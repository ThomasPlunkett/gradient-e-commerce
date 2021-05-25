import React from "react";
import "./Hero.scss";

const Hero = () => {
  return (
    <section className="hero is-info is-large hero-image">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">gradients.shop</h1>
          <div className="shop-now-btn">
            <button className="button is-black" id="shop-now">
              Shop All
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
