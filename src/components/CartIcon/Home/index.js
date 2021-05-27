import React from "react";
import Layout from "../../shared/Layout";
import Hero from "../../Hero/index";
import FeaturedCollection from "../../Featured-Collection/Featured-Collection";

const Home = () => {
  return (
    <>
      <Layout>
        <Hero />
        <FeaturedCollection />
      </Layout>
    </>
  );
};

export default Home;
