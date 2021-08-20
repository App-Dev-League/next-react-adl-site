import React from "react";
import Image from "next/image"
import bgImage from "../../assets/mentorship/bg.jpg"

const Hero = () => {
  return (
    <div className="position-relative">
      <div className="mentorship-hero-background-wrapper">
        <div>
          <Image src={bgImage} layout="fill" />
        </div>
      </div>
      <div className="container-fluid">
        {/* Section Padding */}
        <div className="row justify-content-center align-items-center dark-mode-texts pt-30 pb-20 mentorship-hero-content">
          <div className="col-xl-7 col-lg-8 col-md-11">
            <div
              className="text-center"
              data-aos="zoom-in"
              data-aos-duration={1000}
              data-aos-delay={500}
            >
              <h2 className="font-size-11 mb-5">AFI Program</h2>
            </div>
          </div>
        </div>
        {/* End Section Padding */}
      </div>
    </div>
  );
};

export default Hero;
