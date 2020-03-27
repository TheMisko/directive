import React from "react";

import Nav from "../components/nav";
import Footer from "../components/footer";
import ProjectInfo from "../components/projectInfo";
import ProjectStats from "../components/projectStats";

const url1 =
  "https://images.squarespace-cdn.com/content/v1/54e8ff62e4b0440df7a42b7a/1560449574797-EWED1AA16KV4U3TS9H3O/ke17ZwdGBToddI8pDm48kLkXF2pIyv_F2eUT9F60jBl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iyqMbMesKd95J-X4EagrgU9L3Sa3U8cogeb0tjXbfawd0urKshkc5MgdBeJmALQKw/DSC_0398-Edit.jpg";
const url2 =
  "https://c4.wallpaperflare.com/wallpaper/726/924/893/house-modern-architecture-lights-hd-wallpaper-preview.jpg";
const url3 =
  "https://archinect.imgix.net/uploads/gc/gca4ubxa4vxfgdcn.jpg?auto=compress%2Cformat";
const Project = () => {
  return (
    <div>
      <Nav />
      <div className="project-images-container">
        <img src={url1} />
        <div className="project-images-right">
          {" "}
          <img src={url2} />
          <img src={url3} />
        </div>
      </div>
      <ProjectInfo />
      <ProjectStats />
      <div className="block"></div>
      <Footer />
    </div>
  );
};

export default Project;
