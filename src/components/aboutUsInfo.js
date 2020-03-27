import React from "react";

const AboutUsInfo = () => {
  const url =
    "https://www.edisongroup.com/wp-content/uploads/2019/08/sean-pollock-PhYq704ffdA-unsplash-700x400.jpg";
  return (
    <div className="AU-info-container">
      <div className="AU-info-left">
        <h2>Modern Art Gallery & Museum</h2>
        <h2>Bucharest, RO</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex e
        </p>
      </div>
      <div className="AU-info-right ">
        <img src={url} />
      </div>
    </div>
  );
};

export default AboutUsInfo;
