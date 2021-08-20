import React from "react";
import Image from "next/image";
import imageOne from "../../assets/events.png";
import imageTwo from "../../assets/monthly.png";

const ContentTwo = ({ className, ...rest }) => {
  return (
    <>
      <div className="bg-adl-3 pt-10 pt-lg-20 pb-8 pb-lg-16" {...rest}>
        <div className="container">
          <div className="row"> 
            <div className="col-xs-12">
              <div
                className="section-title dark-mode-texts"
                data-aos="fade-left"
                data-aos-delay={500}
                data-aos-once="true" data-aos-duration={1000}
              >
                <h2 className="font-size-11 mb-8 sm-mb-16">
                  Events
                </h2>
              </div>
            </div>
          </div>
          <div className="row align-items-center justify-content-center">
            {/* Right Image */}
            <div className="col-xl-6 col-lg-5 col-xs-12">
              <div
                className="mt-lg-0 dark-mode-texts"
                data-aos="fade-left"
                data-aos-duration={600}
                data-aos-delay={500}
                data-aos-once="true" data-aos-duration={1000}
              >
                <p className="font-size-5 font-weight-bold text-uppercase mb-1 text-gray" style={{letterSpacing: "3px"}}>ADL event</p>
                <h2 className="font-size-9 mb-5 letter-spacing-n83">
                  Competitive Events
                </h2>
                <p className="font-size-7 mb-0">
                  Every year, App Dev League hosts the <a href="http://appathon.appdevleague.org/" target="blank" rel="noopener noreferrer">ADL appathon.</a> The Appathon is the world's first Application Development Conference designed for students of all backgrounds.
                </p>
                <div className="mt-12">
                  <a
                    href="https://appathon.appdevleague.org/"
                    className="btn btn-outline-primary btn-xl h-55 rounded-5 font-weight-normal"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    ADL Appathon 2021
                  </a>
                </div>
              </div>
            </div>
            {/* End Right Image */}
            <div
              className="col-xl-5 offset-lg-1 col-lg-6 col-md-8 mt-10 mt-lg-0"
              data-aos="fade-right"
              data-aos-duration={600}
              data-aos-delay={300}
              data-aos-once="true" data-aos-duration={1000}
            >
              <Image
                className="w-100"
                src={imageOne}
                alt=""
                width={445}
                height={318}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-default-2 pt-8 pt-lg-16 pb-10 pb-lg-20" {...rest}>
        <div className="container">
          <div className="row align-items-center justify-content-center">
            {/* Right Image */}
            <div
              className="col-xl-6 col-lg-5 col-md-8 mb-10 mb-lg-0"
              data-aos="fade-right"
              data-aos-duration={600}
              data-aos-delay={300}
              data-aos-once="true" data-aos-duration={1000}
            >
              <Image
                className="w-100"
                src={imageTwo}
                alt=""
                width={540}
                height={360}
              />
            </div>
            {/* End Right Image */}
            <div className="col-xl-5 offset-lg-1 col-lg-6 col-xs-12">
              <div
                className="mt-lg-0"
                data-aos="fade-left"
                data-aos-duration={600}
                data-aos-delay={500}
                data-aos-once="true" data-aos-duration={1000}
              >
                <p className="font-size-5 font-weight-bold text-uppercase mb-1 text-gray" style={{letterSpacing: "3px"}}>ADL event</p>
                <h2 className="font-size-9 mb-5 letter-spacing-n83">
                  Monthly Events
                </h2>
                <p className="font-size-7 mb-0">
                  App Dev League strives to offer monthly workshops, camps, and webinars on a variety of Computer Science disciplines with a focus on Application Development and AI. These project-oriented events are a great way for students to not only get introduced to a new concept, but also to apply it in a real-life applicable project.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContentTwo;
