import React from "react";
import instagram from "../../images/instagram.png";
import facebook from "../../images/facebook.png";
import tiktok from "../../images/tiktok.png";
import twitter from "../../images/twitter.png";
import youtube from "../../images/youtube.png";
import "./style/Home_socials.css";

const Home_socials = () => {
  return (
    <section className="social_main">
      <div className="social_media">
        <div className="social_button_div">
          <img className="social_button" src={facebook} alt="" />
        </div>
        <div className="social_button_div">
          <img className="social_button" src={twitter} alt="" />
        </div>
        <div className="social_button_div">
          <img className="social_button" src={instagram} alt="" />
        </div>
        <div className="social_button_div">
          <img className="social_button" src={tiktok} alt="" />
        </div>
        <div className="social_button_div">
          <img className="social_button" src={youtube} alt="" />
        </div>
      </div>
      <img
        className="separator"
        src="https://www.sooratheapp.com/separator.png"
        alt=""
      />
    </section>
  );
};

export default Home_socials;
