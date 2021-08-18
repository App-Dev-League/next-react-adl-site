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
              <h2 className="font-size-11 mb-5">MEET Program</h2>
              <p class="font-size-6 font-weight-light mb-0 px-md-5 px-lg-0">
                App Dev League’s MEET program is a tutoring program where students can learn Computer Science 1-on-1. We offer a variety of subjects, all split into different levels, and we further personalize our course to each and every student.
              </p>
            </div>
          </div>
        </div>
        {/* End Section Padding */}
      </div>
    </div>
  );
};

export default Hero;
