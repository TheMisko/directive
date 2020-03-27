import React from "react";

const LatestPosts = () => {
  const igSlike = [
    "https://ih1.redbubble.net/image.654638943.0321/flat,128x,075,f-pad,128x128,f8f8f8.jpg",
    "https://images.digital.library.illinois.edu/iiif/2/c8d7f7b0-9977-0134-2096-0050569601ca-d/square/!256,256/0/default.jpg?",
    "https://is2-ssl.mzstatic.com/image/thumb/Purple69/v4/c4/34/03/c43403b7-20a5-5057-d69e-f2e2067eae9d/source/256x256bb.jpg",
    "https://static17.gestionaweb.cat/1473/img-256-256/fotolia-90120895-subscription-monthly-l-2.jpg",
    "https://news.artnet.com/app/news-upload/2014/07/640px-Neue_Nationalgalerie_Berlin_2004-02-21-e1415913024110-256x256.jpg",
    "https://www.pen-iron.com/uploads/McDGxavg/256x256_256x256/1186225_618458018189132_939377537_n.jpg"
  ];
  const url =
    "https://images.freeimages.com/images/premium/small-comps/3437/34379378-modern-architecture-london.jpg";
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
