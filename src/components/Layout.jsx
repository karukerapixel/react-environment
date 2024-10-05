import React from "react";
import { Outlet } from "react-router-dom";
import { GlobalStyle } from "../GlobalStyle";

// import components
import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
