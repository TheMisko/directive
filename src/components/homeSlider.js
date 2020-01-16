import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const HomeSlider = () => {
  const homeSlika =
    "https://www.tripsavvy.com/thmb/wUrD461u2f59Rbj8yslGh26v6RA=/2000x1333/filters:no_upscale():max_bytes(150000):strip_icc()/MAXXI_esterno_phBTouillon-56fd9e043df78c7d9e0e85fe.jpg";

  return (
    <div className="slider-img">
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        showArrows={false}
      >
        <div className="slider-img">
          <img src="https://arch11.com/thumbs/publication/modern-in-denver-to-the-11th-degree-winter-2019/dyna-1-1600x900-q80.jpg" />
          {/* <p className="legend">Legend 1</p> */}
        </div>
        <div>
          <img src="https://www.bocadolobo.com/blog/wp-content/uploads/2017/10/8.jpg" />
          {/* <p className="legend">Legend 2</p> */}
        </div>
        <div>
          <img src="https://media-manager.starsinsider.com/1920/na_5b3cb7a1bfb71.jpg" />
          {/* <p className="legend">Legend 3</p> */}
        </div>
        <div>
          <img src="https://images.pexels.com/photos/3069301/pexels-photo-3069301.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
          {/* <p className="legend">Legend 2</p> */}
        </div>
      </Carousel>
    </div>
  );
};

export default HomeSlider;
