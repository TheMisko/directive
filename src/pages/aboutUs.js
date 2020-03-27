import React from "react";
import Nav from "../components/nav";
import AboutUsInfo from "../components/aboutUsInfo";
import AboutUsTeam from "../components/aboutUsTeam";
import AboutUsInfo2 from "../components/aboutUsInfo2";
import Prize from "../components/prize";
import Footer from "../components/footer";
import Prizes from "../components/prizes";

const AboutUs = () => {
  const url = "https://i.imgur.com/AmXnj97.png";
  const url2 = "https://i.imgur.com/EoUUCwt.png";

  return (
    <div>
      <Nav />
      <div className="AU-img">
        <div>
          <img src={url} />
        </div>

        <div className="line-container-test">
          <div className="test">
            <div className="line"></div>
          </div>

          <div className="line-text">
            <h2>LATEST PROJECT</h2>
          </div>
        </div>
      </div>
      <AboutUsInfo />
      <div className="AU-img2">
        <img src={url2} />
      </div>

      <AboutUsTeam />
      <AboutUsInfo2 />
      <Prize />
      <Prizes />
      <Footer />
    </div>
  );
};

export default AboutUs;
