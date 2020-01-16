import React from "react";

const LatestPosts = () => {
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
    <div className="latest-posts-container">
      <h3>LATEST POSTS</h3>
      <div className="post-container">
        <img src={url} />

        <div className="post-info">
          <h5>Private Estate in NY</h5>
          <h4>Jan 28, 2019</h4>
        </div>
      </div>
      <div className="post-container">
        {" "}
        <img src={url} />
        <div className="post-info">
          <div>
            {" "}
            <h5>Private Estate in NY</h5>
            <h4>Jan 28, 2019</h4>
          </div>
        </div>
      </div>
      <div className="post-container">
        {" "}
        <img src={url} />
        <div className="post-info">
          <div>
            {" "}
            <h5>Private Estate in NY</h5>
            <h4>Jan 28, 2019</h4>
          </div>
        </div>
      </div>
      <div className="ig">
        <h4>INSTAGRAM</h4>
      </div>

      <div className="ig-slike-container">
        {igSlike.map(slike => (
          <div className="ig-slike">
            <img src={slike} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestPosts;
