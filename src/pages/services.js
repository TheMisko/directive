import React from "react";
import Nav from "../components/nav";
import ServicesInfo from "../components/servicesInfo";
import OurServices from "../components/ourServices";
import OurServicesInfo from "../components/ourServicesInfo";
import Footer from "../components/footer";
import HomeTeamInfo from "../components/homeTeamInfo";

const Services = () => {
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
            <h2>SERVICES</h2>
          </div>
        </div>
      </div>
      <ServicesInfo />
      <div className="services-img">
        <img src={url} />
      </div>
      <div className="AU-img">
        <div className="line-container-test">
          <div className="test">
            <div className="line"></div>
          </div>

          <div className="line-text">
            <h2>OUR SERVICES</h2>
          </div>
        </div>
      </div>
      <OurServices />
      <HomeTeamInfo />
      {/* <OurServicesInfo /> */}
      <Footer />
      <div className="block"></div>
    </div>
  );
};

export default Services;
