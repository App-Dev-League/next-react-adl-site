import React from "react";

import brand1 from "../../assets/sponsors/aops.png";
import brand2 from "../../assets/sponsors/dell.png";
import brand3 from "../../assets/sponsors/inspirit.png";
import brand4 from "../../assets/sponsors/jetbrains.png";
import brand5 from "../../assets/sponsors/replit.png";
import brand6 from "../../assets/sponsors/wolfram.png";

const SingleBrand = ({ image, darkBg }) => {
  return (
    <>
      {/* Single Brand */}
      <div
        className={`single-brand-logo mx-5 my-6 ${darkBg ? "bg-black" : ""}`}
      >
        <img
          src={image}
          alt=""
          data-aos="fade-in"
          data-aos-once="true"
          data-aos-duration={1000}
        />
      </div>
      {/* Single Brand */}
    </>
  );
};

const Sponsors = ({ className, ...rest }) => {
  const images = [brand1, brand2, brand3, brand4, brand5, brand6];
  return (
    <>
      {/* Company Section */}
      <div className={className} {...rest}>
        <div
          className="container"
          id="sponsors"
          data-aos="fade-in"
          data-aos-once="true"
          data-aos-delay={500}
          data-aos-duration={1000}
        >
          <div className="row">
            <div className="col-12">
              <div className="mb-5 mb-lg-10 text-center text-lg-center">
                <h2 className="font-size-10 mb-0">Primary Sponsors</h2>
              </div>
            </div>
          </div>
          {/* Brand Logos */}
          <div className="brand-logo-small d-flex align-items-center justify-content-center justify-content-lg-between flex-wrap">
            {images.map((brand, index) => (
              <SingleBrand image={brand} key={index} />
            ))}
          </div>
        </div>
      </div>
      {/* End Company Section */}
    </>
  );
};

export default Sponsors;
