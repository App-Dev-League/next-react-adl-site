import React, { useState } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import Image from "next/image";

import memberImage6 from "../../assets/execs/kabir.png";
import memberImage8 from "../../assets/execs/shafin.png";
import memberImage10 from "../../assets/execs/ishir.png";

const SliderSmall = styled(Slider)`
  .slick-slide {
    width: auto !important;
  }
  .slick-slide.slick-current .single-img {
    filter: grayscale(0);
    opacity: 1;
  }
`;

const sliderConfig1 = {
  slidesToShow: 1,
  arrows: false,
  fade: true,
};

const sliderConfig2 = {
  slidesToShow: 3,
  slidesToScroll: 1,
  dots: false,
  arrows: false,
  focusOnSelect: true,
  centerPadding: "20px",
  swipe: false,
  responsive: [
    {
      breakpoint: 320,
      settings: {
        slidesToShow: 3,
      },
    },
  ],
};

const ExecCard = ({ image, name, position, ...rest }) => {
  return (
    <>
      {/* Single Team */}
      <div className="text-center mb-10 mb-lg-15">
        <div className="mb-8 rounded-10">
          <Image
            className="w-50 w-md-75"
            src={image}
            alt=""
            width={262}
            height={262}
          />
        </div>
        <div className="content">
          <h4 className="font-size-7 mb-1">{name}</h4>
          <p className="font-size-5 font-weight-normal mb-0">{position}</p>
        </div>
      </div>
      {/* Single Team */}
    </>
  );
};
const Execs = ({ className, ...rest }) => {
  const ExecsData = [
    {
      image: memberImage6,
      name: "Kabir Ramzan",
      position: "VP of Technology",
      animation: {
        animationName: "fade-up",
        delay: 300,
        duration: null,
      },
    },
    {
      image: memberImage8,
      name: "Shafin Haque",
      position: "VP of Operations",
      animation: {
        animationName: "fade-up",
        delay: 300,
        duration: null,
      },
    },
    /*{
      image: memberImage7,
      name: "Luis Varona",
      position: "Director of Expansion",
      animation: {
        animationName: "fade-up",
        delay: 300,
        duration: null,
      },
    },*/
    {
      image: memberImage10,
      name: "Ishir Lakhani",
      position: "VP of Outreach",
      animation: {
        animationName: "fade-up",
        delay: 300,
        duration: null,
      },
    },
  ];
  return (
    <div className={className} {...rest}>
      <div className="container">
        {/* section title */}
        <div
          className="row justify-content-center"
          data-aos="fade-up"
          data-aos-delay={500}
          data-aos-once="true"
          data-aos-duration={1000}
        >
          <div className="col-12">
            <div className="text-center mb-12 mb-lg-19">
              <h2 className="font-size-10 mb-8 letter-spacing-n83">
                Executive Team
              </h2>
            </div>
          </div>
        </div>
        {/* section title */}
        <div
          className="row justify-content-center"
          data-aos="fade-up"
          data-aos-delay={500}
          data-aos-once="true"
          data-aos-duration={1000}
        >
          {ExecsData.map(({ image, name, position }, index) => {
            return (
              <div className="col-lg-4 col-sm-6 col-xs-8" key={index}>
                <ExecCard image={image} name={name} position={position} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Execs;
