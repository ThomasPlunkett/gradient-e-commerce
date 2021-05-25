import React from "react";
import "./Hero.scss";

const Hero = () => {
  return (
    <section className="hero is-large is-info">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">gradients.shop</h1>
          <div>
            <button>Shop All</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
