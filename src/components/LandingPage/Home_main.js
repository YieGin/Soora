import React from "react";
import "./style/Home_main.css";
import apple from "../../images/apple-store.png";
import google from "../../images/google-play.png";
import Landing_image from "../../images/landing-image-1.png";
const Home_main = () => {
  return (
    <section className="Landing_main1">
      <div className="Landing_left">
        <h4>Coming Soon</h4>
        <h1>Bringing</h1>
        <h1>Muslims Together</h1>
        <div className="Landing_app_store">
          <img className="Apple" src={apple} alt="" />
          <img className="Store" src={google} alt="" />
        </div>
      </div>
      <div className="Landing_right">
        <img className="Landing_image1" src={Landing_image} alt="" />
      </div>
    </section>
  );
};

export default Home_main;
