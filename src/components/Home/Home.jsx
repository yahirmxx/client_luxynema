import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Home.css";
import { Hero } from "../Hero/Hero";
import { MostPopular } from "../MostPopular/MostPopular";
import { Navbar } from "../Navbar/Navbar";
import { Footer } from "../Footer/Footer";

export const Home = () => {
  return (
    <>
      <div>
        <Navbar />
        <Hero />
        <MostPopular />
        <Footer />
      </div>
    </>
  );
};
