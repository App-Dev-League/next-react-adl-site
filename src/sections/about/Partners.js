import React from "react";

import brand1 from "../../assets/partners/csforall-logo.svg";
import brand2 from "../../assets/partners/logo.png";
import brand3 from "../../assets/partners/codeart-logo-full-color-rgb.png";
import brand4 from "../../assets/partners/1609798444498.png";
import brand5 from "../../assets/partners/brand_logo.png";
import brand6 from "../../assets/partners/Fly-High-Logo.png";
import brand7 from "../../assets/partners/youthai.png";

const SingleBrand = ({image, darkBg}) => {
  return (
    <>
      {/* Single Brand */}
      <div className={`single-brand-logo mx-5 my-6 ${darkBg ? 'bg-black' : ''}`}>
        <img src={image} alt="" data-aos="fade-in" data-aos-once="true" data-aos-duration={1000} />
      </div>
      {/* Single Brand */}
    </>
  );
}

const Partners = ({ className, ...rest }) => {
    const images = [
      brand1,
      brand2,
      brand3,
      brand4,
      brand5,
      brand6,
      brand7
    ];
  return (
    <>
      {/* Company Section */}
      <div className={className} {...rest}>
        <div className="container" id="partners">
          <div className="row">
            <div className="col-12">
              <div className="mb-5 mb-lg-10 text-center text-lg-center">
                <h2 className="font-size-10 mb-0">Partners</h2>
              </div>
            </div>
          </div>
          {/* Brand Logos */}
          <div className="brand-logo-small d-flex align-items-center justify-content-center justify-content-lg-between flex-wrap">
            {images.map((brand, index) => (
              <SingleBrand image={brand} key={index} darkBg={index === 1} />
            ))}
          </div>
        </div>
      </div>
      {/* End Company Section */}
    </>
  );
};

export default Partners;
