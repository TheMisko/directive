import React from "react";

const Footer = () => {
  const fbIcon =
    "https://www.vippng.com/png/full/1-12853_facebook-icon-png-logo-fb-png-hd.png";
  const igIcon =
    "http://pluspng.com/img-png/instagram-png-instagram-png-logo-1455.png";

  const twIcon = "http://www.llumac.cat/iconpics/f/0/468/twitter-png.png";
  return (
    <div className="footer-container">
      <div className="footer-item1">
        <p>
          etraset sheets containing Lorem Ipsum passages, and more recently with
          desktop publishing.
        </p>
        <h1>45</h1>
        <div className="footer-line"></div>
        <h5>45 Degrees Architecture @ 2019</h5>
      </div>
      <div className="footer-item">
        <div className="footer-icon">
          <img src={fbIcon} />
          <img src={igIcon} />
          <img src={twIcon} />
        </div>
      </div>
      <div className="footer-item">
        <h1>01</h1>
        <div className="footer-line"></div>
        <h5>4479 Bell Street New York</h5>
      </div>
      <div className="footer-item">
        <h1>02</h1>
        <div className="footer-line"></div>
        <h5>212-269-6072</h5>
      </div>
      <div className="footer-item">
        <h1>03</h1>
        <div className="footer-line"></div>
        <h5>office@45degrees.com</h5>
      </div>
    </div>
  );
};

export default Footer;
