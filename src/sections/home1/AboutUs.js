import React from "react";
import Link from "next/link";

const AboutUs = ({ className, ...rest }) => {
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
                data-aos-once="true"
                data-aos-duration={1000}
              >
                <h2 className="font-size-11 mb-6">About Us</h2>
                <h3 className="font-size-7 text-default-color mb-12">
                  Student-run application development nonprofit
                </h3>
              </div>
            </div>
          </div>
          <div className="row align-items-center">
            <div
              className="col-xs-12"
              data-aos="fade-left"
              data-aos-delay={500}
              data-aos-once="true"
              data-aos-duration={1000}
            >
              <div>
                <p className="heading-default-color font-size-6 mb-0">
                  App Dev League, a student-led nonprofit, is devoted to
                  introducing the world of application development to
                  underrepresented students. We don't just teach students how to
                  code. We teach them how to make an impact on society with
                  their code in an ethically-responsible way.
                </p>
                <div className="row justify-content-center py-7">
                  <div className="col-lg-4 col-md-6 col-xs-10">
                    <div
                      className="py-7 d-flex"
                      data-aos="fade-up"
                      data-aos-delay={500}
                      data-aos-once="true"
                      data-aos-duration={1000}
                    >
                      <div className="square-83 bg-adl-3 shadow-adl-3 rounded-10 text-white font-size-7">
                        <i className="fa fa-link" />
                      </div>
                      <div className="ml-8">
                        <h5>Fostering</h5>
                        <p className="font-size-5 mb-0">
                          support for students who lack access to application
                          development education
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-xs-10">
                    <div
                      className="py-7 d-flex"
                      data-aos="fade-up"
                      data-aos-delay={700}
                      data-aos-once="true"
                      data-aos-duration={1000}
                    >
                      <div className="square-83 rounded-10 bg-blue-3 shadow-dodger-blue-3 text-white font-size-7">
                        <i className="fa fa-level-up-alt" />
                      </div>
                      <div className="ml-8">
                        <h5>Increasing</h5>
                        <p className="font-size-5 mb-0">
                          diversity in the developer community/workplace
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-xs-10">
                    <div
                      className="py-7 d-flex"
                      data-aos="fade-up"
                      data-aos-delay={900}
                      data-aos-once="true"
                      data-aos-duration={1000}
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
                  The COVID global pandemic has affected billions of individuals
                  worldwide and most importantly students’ education. Resources
                  and paid programs have opened all over the world for students
                  to learn about computer science. However, these programs only
                  further the digital divide and leave underrepresented
                  communities in the dust. Our goal is to introduce a set of
                  project-oriented and accessible curricula to bridge that gap.
                  Our focus on application development education and ethics in
                  technology uniquely powers these underprivileged communities
                  to make both a local and global impact right from their homes
                  through the power of Apps!
                </p>
                <div className="btn-group mb-8 mb-lg-12">
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

export default AboutUs;
