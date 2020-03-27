import React, { useState } from "react";

const ContactForm = () => {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const handleSumit = event => {
    setShowConfirmation(true);
    event.preventDefault();
  };
  return (
    <div className="contact-container">
      <form onSubmit={handleSumit}>
        <div className="form">
          <label for="fname">Full Name</label>
          <input type="text" id="fname" name="fname" />
          <label for="lname">E-mail</label>
          <input type="text" id="lname" name="lname" />

          <textarea>Ask us anything...</textarea>
          <div className="submit-container">
            <input className="submit" type="submit" value="Submit" />
          </div>
        </div>{" "}
        <div className="submision-container">
          {showConfirmation ? (
            <div className="submision">
              <h3>YOUR MESSAGE HAS BEEN SENT</h3>
            </div>
          ) : null}
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
