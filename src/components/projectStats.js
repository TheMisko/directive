import React from "react";

const ProjectStats = () => {
  return (
    <div className="project-stats-container">
      <h3>Project Details</h3>
      <div className="stats">
        <h4>Started:</h4> <h5>3/23/2017</h5>
      </div>
      <div className="stats">
        <h4>Finished:</h4> <h5>6/13/2019</h5>
      </div>
      <div className="stats">
        <h4>Size:</h4> <h5>1337m²</h5>
      </div>
      <div className="stats">
        <h4>Budget:</h4> <h5>$ 1.4 M</h5>
      </div>
      <div className="stats">
        <h4>Client:</h4> <h5>Anonymus</h5>
      </div>
    </div>
  );
};

export default ProjectStats;
