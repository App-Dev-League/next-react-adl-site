import React, { useState } from "react";
import styled from "styled-components";
import Slider from "react-slick";

import imgB from "../../assets/execs/kabir.png";
import imgB2 from "../../assets/execs/shafin.png";
import imgB3 from "../../assets/execs/ishir.png";
import imgU1 from "../../assets/execs/kabir.png";
import imgU2 from "../../assets/execs/shafin.png";
import imgU3 from "../../assets/execs/ishir.png";

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
  fade:true
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

const Execs = () => {
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();

  return (
    <div className="pt-4 pt-md-9 pt-lg-14 pb-4 pb-md-9 pb-lg-18">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-7 col-sm-10">
            <div
              className="text-center mb-9 mb-lg-15"
              data-aos="fade-up"
              data-aos-duration={500}
            >
              <h2 className="font-size-10 mb-0">Executive Team</h2>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div
            className="col-xl-7 col-lg-9 col-md-10"
            data-aos="zoom-in"
            data-aos-duration={500}
            data-aos-once="true" data-aos-duration={1000}
          >
            <Slider
              asNavFor={nav2}
              ref={(slider) => setNav1(slider)}
              className="l5-review-slider mx-xl-0 mx-lg-10"
              {...sliderConfig1}
            >
              {/* Single Review */}
              <div className="single-review text-center focus-reset">
                <div className="mb-8 circle-265 mx-auto">
                  <img src={imgB} alt="" className="w-100" />
                </div>
                <div>
                  <h5 className="font-size-7 mb-0">Kabir Ramzan</h5>
                  <p className="font-size-5">VP of Technology</p>
                </div>
                <p className="font-size-6 heading-default-color mt-7">
                  Kabir Ramzan is a sophomore at The Harker School who is passionate about software development. As the VP of tech, he manages the technological operations and infrastructure of ADL, as well as oversees most internal teams. His skills include python and full-stack development. In his free time, Kabir enjoys building apps for his school to aid in remote learning and developing his software company (TogaTech).
                </p>
              </div>
              {/* End Single Review */}
              {/* Single Review */}
              <div className="single-review text-center focus-reset">
                <div className="mb-8 circle-265 mx-auto">
                  <img src={imgB2} alt="" className="w-100" />
                </div>
                <div>
                  <h5 className="font-size-7 mb-0">Shafin Haque</h5>
                  <p className="font-size-5">VP of Operations</p>
                </div>
                <p className="font-size-6 heading-default-color mt-7">
                  Shafin Haque is a junior at Saratoga High School and started coding since he was in middle school. As the VP of operations, he manages logistics and event planning for ADL, as well as oversees most internal teams. His skills include Machine Learning with Python and R, as well as web development with HTML. In his free time, Shafin enjoys competing in hackathons and playing video games.
                </p>
              </div>
              {/* End Single Review */}
              {/* Single Review */}
              <div className="single-review text-center focus-reset">
                <div className="mb-8 circle-265 mx-auto">
                  <img src={imgB3} alt="" className="w-100" />
                </div>
                <div>
                  <h5 className="font-size-7 mb-0">Ishir Lakhani</h5>
                  <p className="font-size-5">VP of Marketing</p>
                </div>
                <p className="font-size-6 heading-default-color mt-7">
                  Ishir Lakhani is a junior at Saratoga High School who got into programming in order to express his creativity through personal projects. As the VP of marketing, he manages the social media, graphic design, and video editing teams. His skills include interpersonal communication, as well as C++, Python, Java, and JavaScript.
                </p>
              </div>
              {/* End Single Review */}
            </Slider>
          </div>
        </div>
        {/* l5-slider-dots */}
        <div className="row justify-content-center">
          <div
            className="col-xl-4 col-lg-5 col-md-6 col-sm-8 col-xs-9 d-flex align-items-center mt-10 mx-xs-4 mx-md-0 mx-xl-6 justify-content-center"
            data-aos="zoom-in"
            data-aos-duration={500}
            data-aos-once="true" data-aos-duration={1000}
          >
            <button
              type="button"
              className="slick-prev bg-white border-0 font-size-8"
              onClick={() => {
                nav1.slickPrev();
              }}
            >
              <i className="icon icon-minimal-left"></i>
            </button>
            <SliderSmall
              asNavFor={nav1}
              ref={(slider) => setNav2(slider)}
              className="l5-slider-dots text-center"
              {...sliderConfig2}
            >
              <div className="single-img circle-73 mx-3 cursor-pointer">
                <img src={imgU1} alt="" className="w-100"  />
              </div>
              <div className="single-img circle-73 mx-3 cursor-pointer">
                <img src={imgU2} alt="" className="w-100"  />
              </div>
              <div className="single-img circle-73 mx-3 cursor-pointer">
                <img src={imgU3} alt="" className="w-100"  />
              </div>
            </SliderSmall>
            <button
              type="button"
              className="slick-next bg-white border-0 font-size-8"
              onClick={() => {
                nav1.slickNext();
              }}
            >
              <i className="icon icon-minimal-right"></i>
            </button>
          </div>
        </div>
        {/* End l5-slider-dots */}
      </div>
    </div>
  );
};

export default Execs;
