import React from "react";

import imgC from "../../assets/camp-program/overview.jpg";
import imgP from "../../assets/image/home-2/png/patterns-dot-green.png";
import imgH from "../../assets/image/home-2/png/right-circlehalf-shape.png";

const Overview = ({ className, ...rest }) => {
  return (
    <>
      <div className={className} {...rest}>
        <div className="container">
          <div className="row align-items-center justify-content-center">
            {/* Left */}
            <div
              className="col-lg-5"
              data-aos="fade-right"
              data-aos-delay={500}
              data-aos-once="true" data-aos-duration={1000}
            >
              <p className="font-size-5 font-weight-bold text-uppercase mb-1 text-gray" style={{letterSpacing: "3px"}}>Overview</p>
              <h2 className="font-size-9 mb-12">
              Community App Management and Production
              </h2>
              <p>
              The CAMP program allows organizations (non profits, school clubs, etc..) to have their websites and apps built within weeks. For free. Our goal for this initiative is to build applications to help communities, especially those that were hit hard by COVID and racial discrimination, in any aspect we can through the power of apps. 
              </p>
            </div>
            {/* Left End */}
            {/* Right */}
            <div
              className="col-lg-7"
              data-aos="fade-left"
              data-aos-delay={500}
              data-aos-once="true" data-aos-duration={1000}
            >
              <div className="l2-content-image-group-2 mb-10 mb-md-0 rounded-10">
                <div className="img-1 position-relative text-right rounded-10">
                  <img className="w-100 rounded-lg" src={imgC} alt="" />
                  <div className="img-2">
                    <img className="w-100" src={imgP} alt="" />
                  </div>
                  <div className="img-3">
                    <img className="h-100 opacity-7" src={imgH} alt="" />
                  </div>
                </div>
              </div>
            </div>
            {/* Right */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Overview;
