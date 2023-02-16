import React from "react";
import HomeMain from "./Home_main";
import HomeScials from "./Home_socials";
import HomeNotify from "./Home_notify";
import HomeSocials2 from "./Home_socials2";
const LandingPage = () => {
  return (
    <div className="Landing_main">
      <HomeMain />
      <HomeScials />
      <HomeNotify />
      <HomeSocials2 />
    </div>
  );
};

export default LandingPage;
