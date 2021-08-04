import React, { useRef } from "react";
import Slider from "react-slick";

import TestimonialCard1 from "../../components/TestimonialCard1";

const Testimonials = ({ className, items, ...rest }) => {
  const elSlider = useRef();

  const slickSettings = {
    autoplay: false,
    slidesToShow: 2,
    arrows: false,
    infinite: true,
    dots: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 468,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className={className} {...rest}>
        <div className="container mx-n6">
          {/* <!-- Section Title --> */}
          <div className="mb-8 mb-lg-5">
            <div className="row align-items-center justify-content-end">
              <div
                className="col-lg-5 col-md-3"
                data-aos="fade-left"
                data-aos-delay="500"
              >
                <div className="testimonial-one-button text-right mt-n13">
                  <button
                    type="button"
                    className="slick-prev"
                    onClick={() => {
                      elSlider.current.slickPrev();
                    }}
                  >
                    <i className="icon icon-minimal-left"></i>
                  </button>
                  <button
                    type="button"
                    className="slick-next"
                    onClick={() => {
                      elSlider.current.slickNext();
                    }}
                  >
                    <i className="icon icon-minimal-right"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- End Section Title --> */}
          {/* <!-- category slider --> */}
          <div className="row">
            <div className="col-12">
              <div className="testimonial-one events">
                <Slider
                  ref={elSlider}
                  {...slickSettings}
                >
                  {items.map((item, index) => (
                    <div className="single-category focus-reset h-100" key={index}>
                      <TestimonialCard1 options={item} />
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
          {/* <!-- End category slider --> */}
        </div>
      </div>
    </>
  );
};

export default Testimonials;
