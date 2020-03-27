import React from "react";
import Nav from "../components/nav";
import ServicesInfo from "../components/servicesInfo";
import OurServices from "../components/ourServices";
import OurServicesInfo from "../components/ourServicesInfo";
import Footer from "../components/footer";
import HomeTeamInfo from "../components/homeTeamInfo";

const Services = () => {
  const url = "https://i.imgur.com/AmXnj97.png";
  const url2 =
    "https://cdn.i-scmp.com/sites/default/files/styles/1200x800/public/d8/images/methode/2019/11/19/7453f03c-00a1-11ea-ab68-c2fa11fa07a6_image_hires_184143.jpg?itok=X5z-x31k&v=1574160124";
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
        <img src={url2} />
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

      <Footer />
    </div>
  );
};

export default Services;
