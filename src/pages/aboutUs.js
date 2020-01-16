import React from "react";
import Nav from "../components/nav";
import AboutUsInfo from "../components/aboutUsInfo";
import AboutUsTeam from "../components/aboutUsTeam";
import AboutUsInfo2 from "../components/aboutUsInfo2";
import Prize from "../components/prize";
import Footer from "../components/footer";
import Prizes from "../components/prizes";

const AboutUs = () => {
  const url2 =
    "https://previews.123rf.com/images/ultramansk/ultramansk1801/ultramansk180100146/94290636-perspective-exterior-pattern-blue-glass-wall-modern-buildings.jpg";
  const url =
    "http://hdwpro.com/wp-content/uploads/2016/11/Super-Building-Wallpaper.jpg";
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
