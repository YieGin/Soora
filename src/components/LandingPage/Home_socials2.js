import React from "react";
import instagram from "../../images/instagram.png";
import facebook from "../../images/facebook.png";
import tiktok from "../../images/tiktok.png";
import twitter from "../../images/twitter.png";
import youtube from "../../images/youtube.png";
import "./style/Home_socials2.css";

const Home_socials2 = () => {
  return (
    <section className="social_main2">
      <div className="social_media2">
        <div className="social_button_div2">
          <img className="social_button2" src={facebook} alt="" />
        </div>
        <div className="social_button_div2">
          <img className="social_button2" src={twitter} alt="" />
        </div>
        <div className="social_button_div2">
          <img className="social_button2" src={instagram} alt="" />
        </div>
        <div className="social_button_div2">
          <img className="social_button2" src={tiktok} alt="" />
        </div>
        <div className="social_button_div2">
          <img className="social_button2" src={youtube} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Home_socials2;
