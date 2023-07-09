import React from "react";
import Navbar from "./Navbar.jsx";
import Jumbotron from "./Jumbotron.jsx";
import Cards from "./Cards.jsx";
import Footer from "./Footer.jsx";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
  return (
    <>
      <Navbar />
      <Jumbotron />
      <div className="d-flex justify-content-md-between flex-wrap justify-content-center">
        <Cards />
        <Cards />
        <Cards />
        <Cards />
      </div>
      <Footer />
    </>
  );
};

export default Home;
