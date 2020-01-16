import React from "react";

const AboutUsTeam = () => {
  const url1 =
    "https://thumbs.dreamstime.com/z/handsome-senior-man-blue-shirt-skeptic-expression-handsome-senior-man-blue-shirt-skeptic-nervous-expression-148330991.jpg";
  const url2 =
    "https://www.alexandra.co.uk/media/catalog/product/cache/2/image/9df78eab33525d08d6e5fb8d27136e95/n/f/nf231_pb_model.jpg";
  const url3 =
    "https://image.shutterstock.com/z/stock-photo-portrait-of-smiling-handsome-man-in-blue-shirt-standing-with-crossed-arms-against-gray-textured-1169703274.jpg";
  return (
    <div className="AU-team-container">
      <div className="AU-team-person">
        <img src={url2} />
        <h3>Maria Karls</h3>
        <h5>Junior Architect</h5>
        <p>
          {" "}
          consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
          Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, conse
        </p>
        <h5>read more</h5>
      </div>
      <div className="AU-team-person">
        <img src={url1} />
        <h3>Ralph Smit</h3>
        <h5>Architect</h5>
        <p>
          {" "}
          consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
          Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, conse
        </p>
        <h5>read more</h5>
      </div>
      <div className="AU-team-person">
        <img src={url3} />
        <h3>Jack Turman</h3>
        <h5>Intern</h5>
        <p>
          {" "}
          consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
          Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, conse
        </p>
        <h5>read more</h5>
      </div>
    </div>
  );
};

export default AboutUsTeam;
