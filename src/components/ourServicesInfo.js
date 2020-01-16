import React from "react";

const OurServicesInfo = () => {
  const url =
    "http://hdwpro.com/wp-content/uploads/2016/11/Super-Building-Wallpaper.jpg";
  return (
    <div className="OSI-container">
      <div className="OSI-img">
        <img src={url} />
      </div>
      <div className="OSI-right">
        <h3>
          How we manage to became one of the most experienced team of architects
        </h3>
        <p>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
          If you are going to use a passage of Lorem Ipsum, you need to be sure
          there isn't anything embarrassing hidden in the middle of text.
        </p>
        <h5>Read more</h5>
      </div>
    </div>
  );
};

export default OurServicesInfo;
