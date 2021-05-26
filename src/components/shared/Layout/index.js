import React from "react";
import Header from "../../Header/Header";
import Footer from "../../Footer/index";
// Pretty sure Emily fixed these 2 in class and I'm just running into the same issue, fixed these just in case

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
