import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

const user = localStorage.getItem("googleUser");

const Home = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-xl-8 m-auto col-lg-8  col-md-12 col-sm-12 col-xs-12">
          <div className="background-gradient mt-5 opacity-5">
            <p className="main-text">
              <span className="main-text1">ALREADY GENERATED  MORE THAN 1
              MILLION DESIGNS
              </span>
            </p>
          </div>
          <h2 className="sub-heading" style={{ textAlign: "center" }}>
            Generate your dream house
            <br />
            in seconds using AI
          </h2>
          <p className="sub-text">
            Capture a house Photo and see it Transform into 8+ themes instantly.
            Join Our Satisfied <br />  customers and revamp your space today!
          </p>
          <div className="button-container">
            <Link to={user ? "/designing " : "/login"} className="log-button">
              GENERATE YOUR HOUSE
            </Link>
          </div>
        </div>
        <div className="top-right-section">
          <div className="round-background"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
