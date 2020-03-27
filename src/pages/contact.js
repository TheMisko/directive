import React from "react";
import Footer from "../components/footer";
import Nav from "../components/nav";
import MapBox from "../components/mapBox";
import ContactForm from "../components/contactForm";

const Contact = () => {
  return (
    <div>
      <Nav />
      <MapBox />

      <ContactForm />

      <Footer />
    </div>
  );
};

export default Contact;
