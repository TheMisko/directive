import React, { useState } from "react";
import Nav from "../components/nav";
import ProjectExample1 from "../components/projectExample1";
import Footer from "../components/footer";
import LatestPosts from "../components/latestPosts";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const Projects = () => {
  const [show, setShow] = useState(false);

  const headerUrl = "https://i.imgur.com/AmXnj97.png";
  const urls1 = [
    "https://cdn.trendir.com/wp-content/uploads/old/house-design/concrete-house-2.jpg",
    "https://www.washingtonian.com/wp-content/uploads/2019/09/web_Exterior-back.jpg",
    "https://assets.themodernhouse.com/wp-content/uploads/2017/04/02_20170405-DSC_8296-WEB-950x634.jpg"
  ];
  const urls2 = [
    "https://maricamckeel.com/wp-content/uploads/2019/06/ChaletPerche_14-940x600.jpg",
    "https://lh4.googleusercontent.com/proxy/Tx1ApHuhR7VoDaRK0vb3gB9v-DN_b0jgIIfua77B4LM7auq7ooktpQouf8o9DqtkI9jo4SZdVsKGTzFdYohorPCheT1SRDdzfE4xJs9RMA",
    "https://www.concordprojects.com/wp-content/uploads/2019/06/DLittle-Photo-June-10-Streetview-2019-0059-2-e1561486943172.jpg"
  ];

  return (
    <div>
      <Nav />
      <div className="AU-img">
        <div className="line-container">
          <div className="test">
            <div className="line"></div>
          </div>

          <div className="line-text">
            <h2>LATEST PROJECT</h2>
          </div>
        </div>
        <img src={headerUrl} />
      </div>
      <div className="projects-flex">
        <div>
          <LatestPosts />
        </div>

        <div>
          {urls1.map(url => (
            <div>
              <ProjectExample1 url={url} />
            </div>
          ))}

          <div className="projects-flex">
            {show ? (
              <div>
                {urls2.map(url => (
                  <ProjectExample1 url={url} />
                ))}
              </div>
            ) : (
              <div
                onClick={() => setShow(true)}
                className="projects-btn-container"
              >
                <div className="prjts-btn">MORE</div>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Projects;
