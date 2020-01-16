import React from "react";
import Footer from "../components/footer";
import Nav from "../components/nav";
import MapBox from "../components/mapBox";

const Contact = () => {
  return (
    <div>
      <Nav />
      <div className="contact-container">
        <form>
          <div className="form">
            <label for="fname">Full Name</label>
            <input type="text" id="fname" name="fname" />
            <label for="lname">E-mail</label>
            <input type="text" id="lname" name="lname" />
            <textarea>Ask us anything...</textarea>
          </div>
        </form>
        {/* <div className="g-maps"></div> */}
        <MapBox />
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
