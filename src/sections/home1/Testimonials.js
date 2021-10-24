import React, { useRef } from "react";
import Slider from "react-slick";

import TestimonialCard1 from "../../components/TestimonialCard1";

const items = [
  {
    content:
      `The App Dev League has been a wonderful place to volunteer. The founder and  VP's work very hard to keep the organization running smoothly, and never pressure anyone to do work beyond their capacity. App Dev League also provides a lot of benefits to volunteers including the PVSA. I have been able to grow myself as a person, developer, and mentor in ways I never could have otherwise by contributing to their amazing mission of bringing the magic of coding and App Dev to everyone.
  `,
    userlink: "- Sarthak",
    grade: "Director @ ADL"
  },
  {
    content:
      `
      Before this camp, I had tried out other coding camps, but none of them were
      great.
      Then
      I got an email from App Dev League. I hesitated to sign-up, but I eventually did
      and
      that was probably the best choice I have made coding-wise before this camp. I
      didn't
      know anything about code, but with this camp, I have learned more about coding
      in
      more
      than all of the other classes I have taken combined!! The greatest thing about
      this
      camp
      is that it is free!!! The instructors are great, and so on, there isn't much you
      could
      say is bad, so if you are reading this, you have to try out this camp.
  `,
    userlink: "- Alex",
    grade: "6th Grader"
  },
  {
    content:
      `

      I appreciate App Dev League in general because they offer such programs amid
      pandemic.
      Their mission is relevant to everyone, especially those who are anxious about
      what's
      happening in the world right now, that nothing can stop them from learning new
      things or
      mastering their skills. As a student, taking the time and making efforts are not
      a
      joke.
      They still manage to contribute to society regardless of their plans and time. I
      am
      very
      grateful for all the help. Thank you for such a wonderful contribution!
  `,
    userlink: "- Zyrene",
    grade: "11th Grader"
  },
  {
    content:
      `
      The App Dev League's "Learn to Code" workshop was a great experience! I have
      never
      coded
      before, and this was a great place to start! Our instructor gave very thorough
      and
      simple instructions to help out us beginners, but I still learned a lot.
      Overall, a
      very
      well run class, and I appreciate it!
    `,
    userlink: "- Harrison",
    grade: "10th Grader"
  },
  {
    content:
      `
      App Dev League's Basic Web Dev course was awesome. I went into it trying to
      learn
      about
      how to make a website, and the teacher was awesome and walked us through each
      part
      of
      HTML, CSS, and Javascript, calmly and easily, making the class both fun and
      enriching!
  `,
    userlink: "- Joshua",
    grade: "9th Grader"
  },
  {
    content:
      `I really enjoyed attending the Intro App Dev course in July 2021, and I learned a lot. It was very organized and easy to follow and I like the variety of teachers, in case one learning style doesn't fit. We made a few apps and looking at the results, I felt really proud of what I made.
  `,
    userlink: "- Divya",
    grade: "7th Grader"
  },
  {
    content:
      `I had a lot of fun during the Intro to Game Dev Course held by App Dev Leage! The instructors were super nice and helpful; I always felt comfortable to ask any questions I had. I like the way that the classes were more interactive in comparison to other online classes! Overall, I think I learned a lot, and I enjoyed all the projects we did!
  `,
    userlink: "- Eliza",
    grade: "8th Grader"
  },
  {
    content:
      `I learned so much more about coding from the CS winter camp held in 2020 by App Dev League, and I especially enjoyed making my own website and learning about Machine Learning. I took lots of notes that I will hold onto for future coding!
  `,
    userlink: "- Hannah",
    grade: "5th Grader"
  }
];

const Testimonials = ({ className, ...rest }) => {
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
        <div className="container">
          {/* <!-- Section Title --> */}
          <div className="mb-8 mb-lg-5">
            <div className="row align-items-center">
              <div className="col-lg-7 col-md-9">
                <div
                  className="mb-8 mb-lg-16 mb-md-0 text-center text-md-left"
                  data-aos="fade-right"
                  data-aos-delay="500"
                >
                  <span className="bg-dodger-blue-2-op1 circle-84 font-size-9 mb-5 mb-lg-11 mx-auto mx-md-0">
                    <i className="fa fa-heart text-dodger-blue-2"></i>
                  </span>
                  <h2 className="font-size-11 mb-0">
                    Testimonials
                  </h2>
                </div>
              </div>
              <div
                className="col-lg-5 col-md-3"
                data-aos="fade-left"
                data-aos-delay="500"
              >
                <div className="testimonial-one-button text-center text-md-right mt-3 mt-md-18">
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
              <div className="testimonial-one">
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
