import React from "react";
import "./Hero.scss";

const Hero = () => {
  return (
    <section className="hero is-info is-large hero-image">
      <div style={{height: 700}} className="hero-body">
        <div className="container">
          <br/>
          <br/>
          <h1 style={{marginBottom: 60, fontSize:65}}  className="title">gradients.shop</h1>
          <div className="shop-now-btn">
            <button style={{
              borderColor: 'black',
              fontSize: 20,
              color:"white",
              backgroundColor:'black',
              padding: 8, 
              fontWeight: "bolder", 
              display: "inline-block"
              }}
              className="button" id="shop-now">
              SHOP ALL
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
