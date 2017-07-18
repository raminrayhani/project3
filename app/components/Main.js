import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";

const Main = props => (
  <div>
    <Nav />
    {props.children}
    <Footer />
  </div>
);

export default Main;
