import React from "react";
import { Link } from "react-router-dom";
const ProjectExample1 = ({ url }) => {
  console.log(url);
  // const url =
  //   "https://assets.themodernhouse.com/wp-content/uploads/2019/05/20190516-DSC_0845-WEB-1600x1068.jpg";
  return (
    <div className="projects-container">
      <div className="projects-item">
        <div className="projects-img">
          <img src={url} />
        </div>
        <div className="projects-info">
          <h2>Private Estate in NY</h2>
          <h4>By Cristian Smith / in Architecture</h4>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make{" "}
          </p>
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to="/project"
          >
            <h5>Read more</h5>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectExample1;
