import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import "./Home.css";
import { Hero } from "../Hero/Hero";
import { MostPopular } from "../MostPopular/MostPopular";

export const Home = () => {
  return (
    <>
      <div className="-mt-20">
        <Hero />
        <MostPopular />
      </div>
    </>
  );
};
