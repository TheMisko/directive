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

  const igSlike = [
    "http://hdwpro.com/wp-content/uploads/2016/11/Super-Building-Wallpaper.jpg",
    "http://hdwpro.com/wp-content/uploads/2016/11/Super-Building-Wallpaper.jpg",
    "http://hdwpro.com/wp-content/uploads/2016/11/Super-Building-Wallpaper.jpg",
    "http://hdwpro.com/wp-content/uploads/2016/11/Super-Building-Wallpaper.jpg",
    "http://hdwpro.com/wp-content/uploads/2016/11/Super-Building-Wallpaper.jpg",
    "http://hdwpro.com/wp-content/uploads/2016/11/Super-Building-Wallpaper.jpg"
  ];
  const url =
    "http://hdwpro.com/wp-content/uploads/2016/11/Super-Building-Wallpaper.jpg";
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
        <img src={url} />
      </div>
      <div className="projects-flex">
        <div>
          <LatestPosts />
          {/* <div className="ig-slike-container">
            {igSlike.map(slike => (
              <div className="ig-slike">
                <img src={slike} />
              </div>
            ))}
          </div> */}
        </div>

        <div>
          <ProjectExample1 />
          <ProjectExample1 />
          <ProjectExample1 />
          <div className="projects-flex">
            {show ? (
              <div>
                <div
                  data-aos="fade-zoom-in"
                  data-aos-easing="ease-in-back"
                  data-aos-delay="0"
                  data-aos-offset="0"
                >
                  <ProjectExample1 />
                  <ProjectExample1 />
                  <ProjectExample1 />
                </div>
              </div>
            ) : (
              <div className="projects-btn">
                <button onClick={() => setShow(true)}>MORE</button>
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
