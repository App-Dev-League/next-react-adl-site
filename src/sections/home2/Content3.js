import React from "react";
import Link from "next/link";

import imgM from "../../assets/image/home-2/png/meeting-2.png";
import imgDP from "../../assets/image/home-2/png/dot-pattern-black.png";
import imgLC from "../../assets/image/home-2/png/left-circlehalf-shape.png";

const Content3 = ({ className, ...rest }) => {
  return (
    <>
      <div className={className} {...rest}>
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <div
                className="section-title"
                data-aos="fade-left"
                data-aos-delay={500}
                data-aos-once="true" data-aos-duration={1000}
              >
                <h2 className="font-size-11 mb-6">
                  About us
                </h2>
                <h3 className="font-size-7 text-default-color mb-12">
                  Largest Coalition of High School Student-Run App Development Teachers
                </h3>
              </div>
            </div>
          </div>
          <div className="row align-items-center">
            <div
              className="col-xs-12"
              data-aos="fade-left"
              data-aos-delay={500}
              data-aos-once="true" data-aos-duration={1000}
            >
              <div>
                <p className="heading-default-color font-size-6 mb-0">
                  App Dev League, a student-led nonprofit, is devoted to bringing computer science education to underrepresented students. We specifically focus on application development and AI. Our goals include:
                </p>
                <div className="row justify-content-center py-7">
                  <div className="col-lg-4 col-md-6 col-xs-10">
                    <div
                      className="py-7 d-flex"
                      data-aos="fade-up"
                      data-aos-delay={500}
                      data-aos-once="true" data-aos-duration={1000}
                    >
                      <div className="square-83 bg-blue-3 shadow-dodger-blue-3 rounded-10 text-white font-size-7">
                        <i className="fa fa-link" />
                      </div>
                      <div className="ml-8">
                        <h5>Fostering</h5>
                        <p className="font-size-5 mb-0">
                          support for students who lack CS opportunities
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-xs-10">
                    <div
                      className="py-7 d-flex"
                      data-aos="fade-up"
                      data-aos-delay={700}
                      data-aos-once="true" data-aos-duration={1000}
                    >
                      <div className="square-83 bg-sunset shadow-sunset rounded-10 text-white font-size-7">
                        <i className="fa fa-level-up-alt" />
                      </div>
                      <div className="ml-8">
                        <h5>Increasing</h5>
                        <p className="font-size-5 mb-0">
                          the diversity in STEM communities and the workforce
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-xs-10">
                    <div
                      className="py-7 d-flex"
                      data-aos="fade-up"
                      data-aos-delay={900}
                      data-aos-once="true" data-aos-duration={1000}
                    >
                      <div className="square-83 bg-dodger-blue-1 shadow-dodger-blue-1 rounded-10 text-white font-size-7">
                        <i className="fa fa-bolt" />
                      </div>
                      <div className="ml-8">
                        <h5>Empowering</h5>
                        <p className="font-size-5 mb-0">
                          students to make a social impact in their communities
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="heading-default-color font-size-6 mb-11">
                  The COVID global pandemic has affected billions of individuals worldwide and most importantly <strong>students’ education. </strong>Through our various iniatiatives from a <strong>free teaching app </strong>to our monthly events and <strong>conferences</strong>, our students will have the power to make a <strong>global impact </strong>right from their homes by creating cool websites and apps!
                </p>
                <div className="btn-group mb-12">
                  <Link href={"/about"}>
                    <a className="btn btn-dodger-blue-2 rounded-5">
                      Learn More About Us
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content3;
