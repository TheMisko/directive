import React from "react";

const ServicesInfo = () => {
  const url =
    "http://hdwpro.com/wp-content/uploads/2016/11/Super-Building-Wallpaper.jpg";
  return (
    <div className="services-info-container">
      <div className="services-info">
        <h2>WE make your house,</h2>
        <h2>your HOME</h2>
        <p>
          It was popularised in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions of Lorem
          Ipsum.
        </p>
      </div>

      {/* <div className="services-info-img">
        <img src={url} />
      </div> */}
      <div className="services-info-img">
        <img src={url} />
      </div>
      <div className="services-info-img">
        <img src={url} />
      </div>
    </div>
  );
};

export default ServicesInfo;
