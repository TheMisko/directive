import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const HomeTeamInfo = () => {
  const url =
    "https://tandthomes.co/wp-content/uploads/2019/08/modern-industrial-office-design-furniture-ideas-trends-tomorrow-designs-expect.jpeg";
  return (
    <div className="HTI-container">
      <div data-aos-duration="1500" data-aos="fade-right">
        <div className="HTI-img">
          <img src={url} />
        </div>
      </div>
      <div data-aos-duration="1500" data-aos="fade-left">
        <div className="HTI-text">
          <h2>
            How we mange to become one of the most experinced team of
            architects.
          </h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
          <h4>Read more</h4>
        </div>
      </div>
    </div>
  );
};

export default HomeTeamInfo;
