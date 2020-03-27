import React from "react";
import Nav from "../components/nav";
import HomeSliderControls from "../components/homeSliderControls";
import HomeCards from "../components/homeCards";
import Project1 from "../components/project1";
import HomeTeamInfo from "../components/homeTeamInfo";
import Numbers from "../components/numbers";
import HomeProjects from "../components/homeProjects";
import Footer from "../components/footer";
import HomeSlider from "../components/homeSlider";

const Home = () => {
  const homeSlika =
    "https://www.tripsavvy.com/thmb/wUrD461u2f59Rbj8yslGh26v6RA=/2000x1333/filters:no_upscale():max_bytes(150000):strip_icc()/MAXXI_esterno_phBTouillon-56fd9e043df78c7d9e0e85fe.jpg";
  return (
    <div className="home-container">
      <Nav />

      <HomeSlider />

      <div className="home-container">
        <HomeCards />
        <div className="line-container">
          <div className="test">
            <div className="line"></div>
          </div>

          <div className="line-text">
            <h2>LATEST PROJECT</h2>
          </div>
        </div>
      </div>

      <Project1 />
      <HomeTeamInfo />
      <Numbers />
      <HomeProjects />
      <Footer />
    </div>
  );
};

export default Home;
