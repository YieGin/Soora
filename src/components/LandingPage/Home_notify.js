import React from "react";
import "./style/Home_notify.css";
import Landing_image from "../../images/landing-image-2.png";
const Home_notify = () => {
  return (
    <section className="Landing_main1">
      <div className="Landing_notify_right_phone">
        <h4>Coming Soon</h4>
        <h1>Get Notified</h1>
        <h1>When We Launch</h1>
        <div className="Search_div">
          <input className="Search" type="text" />
          <button className="Notify_Me">Notify Me</button>
        </div>
        <p className="No_spam">*Don't worry, we won't spam you</p>
      </div>
      <div className="Landing_notify_left">
        <img className="Landing_Image2" src={Landing_image} alt="" />
      </div>
      <div className="Landing_notify_right">
        <h4>Coming Soon</h4>
        <h1>Get Notified</h1>
        <h1>When We Launch</h1>
        <div className="Search_div">
          <input className="Search" type="text" />
          <button className="Notify_Me">Notify Me</button>
        </div>
        <p className="No_spam">*Don't worry, we won't spam you</p>
      </div>
    </section>
  );
};

export default Home_notify;
