import React, { useMemo } from "react";

import brand1 from "../../assets/partners/csforall-logo.svg";
import brand2 from "../../assets/partners/logo.png";
import brand3 from "../../assets/partners/codeart-logo-full-color-rgb.png";
import brand4 from "../../assets/partners/1609798444498.png";
import brand5 from "../../assets/partners/brand_logo.png";
import brand6 from "../../assets/partners/Fly-High-Logo.png";
import brand7 from "../../assets/partners/youthai.png";
import brand8 from "../../assets/partners/ypws.png";
import brand9 from "../../assets/partners/csta.png";
import brand10 from "../../assets/partners/ncwit.png";
import brand11 from "../../assets/partners/spiral.png";

const SingleBrand = ({ image, darkBg, first, last }) => {
  const xMarginClassName = useMemo(() => {
    if (first) return "ml-5 ml-sm-auto mr-5";
    if (last) return "mr-5 mr-sm-auto ml-5";
    return "mx-5";
  }, []);
  return (
    <>
      {/* Single Brand */}
      <div
        className={`single-brand-logo my-6 ${
          darkBg ? "bg-black" : ""
        } ${xMarginClassName}`}
      >
        <img src={image} alt="" loading="lazy" />
      </div>
      {/* Single Brand */}
    </>
  );
};

const Partners = ({ className, ...rest }) => {
  const images = [
    brand1,
    brand2,
    brand3,
    brand4,
    brand5,
    brand6,
    brand7,
    brand8,
    brand9,
    brand10,
    brand11,
  ];
  return (
    <>
      {/* Company Section */}
      <div className={className} {...rest}>
        <div
          className="container-fluid"
          id="partners"
          data-aos="fade-in"
          data-aos-once="true"
          data-aos-delay={500}
          data-aos-duration={1000}
        >
          <div className="row">
            <div className="col-12">
              <div className="mb-5 mb-lg-10 text-center text-lg-center">
                <h2 className="font-size-10 mb-0">Partners</h2>
              </div>
            </div>
          </div>
          {/* Brand Logos */}
          <div className="brand-logo-small d-flex flex-column flex-sm-row align-items-center align-items-sm-start overflow-sm-auto">
            {images.map((brand, index) => (
              <SingleBrand
                image={brand}
                key={index}
                darkBg={index === 1}
                first={index === 0}
                last={index === images.length - 1}
              />
            ))}
          </div>
        </div>
      </div>
      {/* End Company Section */}
    </>
  );
};

export default Partners;
