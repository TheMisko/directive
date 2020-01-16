import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const Project1 = () => {
  const url =
    "https://images.unsplash.com/photo-1518005076933-9ef6bec005cb?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max";
  return (
    <div className="project-1-container">
      <div data-aos-duration="1500" data-aos="fade-right">
        <div className="project-1-text">
          <div className="P1-fonts">
            {" "}
            <h1>Bucharest, RO</h1>
            <h2>Modern Art Gallerdasdsady & Museaum</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy
            </p>
          </div>
        </div>
      </div>
      <div data-aos-duration="1500" data-aos="fade-left">
        <div className="project-1-img">
          <img src={url} />
          <div className="project-1-img-text">
            <div>Architect: Annie D. Dotson</div>
            <div>Location: Bucharest, Romania</div>
            <div> Date Started: 29.05.2015</div>
            <div>Date Completed: 10.01.2016</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Project1;
