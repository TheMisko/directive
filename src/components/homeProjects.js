import React from "react";

const HomeProjects = () => {
  const url1 =
    "https://media.architecturaldigest.com/photos/5ab28a332ed63a101d561dac/2:1/w_1280%2Cc_limit/MakingLAModern_p140-141.JPG";
  const url2 =
    "https://www.modernindenver.com/wp-content/uploads/2019/12/3.jpg";
  const url3 =
    "https://muza-chan.net/aj/poze-weblog4/osaka-maritime-museum.jpg";
  return (
    <div className="home-projects-container">
      <div className="home-project">
        <img src={url1} />
        <h4>Palace Fashion Mall</h4>
        <h5>Public</h5>
      </div>
      <div className="home-project">
        <img src={url2} />
        <h4>Palace Fashion Mall</h4>
        <h5>Public</h5>
      </div>
      <div className="home-project">
        <img src={url3} />
        <h4>Palace Fashion Mall</h4>
        <h5>Public</h5>
      </div>
    </div>
  );
};

export default HomeProjects;
