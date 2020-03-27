import React from "react";

const OurServices = () => {
  const info = [
    {
      img:
        "https://cdn.iconscout.com/icon/premium/png-256-thumb/modern-architecture-1808135-1534754.png",
      service: "Architecture"
    },
    {
      img:
        "https://cdn.iconscout.com/icon/premium/png-256-thumb/modern-architecture-1808133-1534752.png",
      service: "Concept"
    },
    {
      img:
        "https://cdn.iconscout.com/icon/premium/png-256-thumb/modern-architecture-1808137-1534756.png",
      service: "Apartment Building"
    },
    {
      img:
        "https://cdn.iconscout.com/icon/free/png-256/modern-architecture-1808136-1534755.png",
      service: "Skyscrapers"
    },
    {
      img:
        "https://cdn.iconscout.com/icon/premium/png-256-thumb/modern-architecture-1808121-1534740.png",
      service: "Project"
    },
    {
      img:
        "https://cdn.iconscout.com/icon/premium/png-256-thumb/modern-architecture-1808127-1534746.png",
      service: "Product Design"
    }
  ];

  return (
    <div className="our-services-container">
      {info.map(info => (
        <div className="our-services-item">
          {" "}
          <img src={info.img} /> <h4>{info.service}</h4>
          <p>
            At vero eos et accusamus et iusto odio
            <br /> ducimus qui blanditiis praesentium voluptatum <br />
            deleniti atque corrupti quos.
          </p>
          <h5>Read more</h5>
        </div>
      ))}
    </div>
  );
};

export default OurServices;
