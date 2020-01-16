import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const AboutUsInfo2 = () => {
  const url =
    "https://www.propertyturkey.com/uploads/pages/larg/sancaklar-mosque.jpg";
  return (
    <div className="AU-info2-container">
      <div data-aos-duration="1500" data-aos="fade-right">
        <div className="AU-info2-img">
          <img src={url} />
        </div>
      </div>
      <div className="AU-info2-right">
        <div data-aos-duration="1500" data-aos="fade-left">
          <h5>
            How we managed to become one of the most experinced team of
            acrhitects.
          </h5>
          <p>
            But I must explain to you how all this mistaken idea of denouncing
            pleasure and praising pain was born and I will give you a complete
            account of the system, and expound the actual teachings of the great
            explorer of the truth.
          </p>
          <p>read more</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUsInfo2;
