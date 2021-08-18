import React from "react";

import imgA1 from "../../assets/image/home-2/png/arrow-1.png";
import imgA2 from "../../assets/image/home-2/png/arrow-2.png";
import imgE from "../../assets/image/home-2/png/event-confirm.png";
import imgR from "../../assets/image/home-2/png/right-layer.png";

const NextSteps = ({ className, ...rest }) => {
  return (
    <>
      <div className={className} {...rest}>
        <div className="container">
          {/* <!-- Section Title --> */}
          <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-8 col-md-9 col-xs-10">
              <div className="text-center pt-13 pt-lg-23 pb-13 pb-lg-12 pr-lg-10 pr-xl-0">
                <h2 className="font-size-11 mb-0">
                  Next Steps
                </h2>
              </div>
            </div>
          </div>
          {/* <!-- Section Title --> */}
          {/* <!-- Progress Items --> */}
          <div className="row justify-content-center">
            <div className="col-sm-12 col-xs-8">
              <div className="timeline-area d-sm-flex just justify-content-lg-between flex-wrap flex-lg-nowrap position-relative">
                {/* <!-- Image Group --> */}
                <div className="image-group-3">
                  <div
                    className="arrow-shape-1 d-none d-lg-block absolute-top-left"
                    data-aos="zoom-in"
                    data-aos-delay="600"
                    data-aos-once="true" data-aos-duration={1000}
                    data-aos-duration={1000}
                  >
                    <img src={imgA1} alt="" />
                  </div>
                  <div
                    className="arrow-shape-2 d-none d-lg-block absolute-top-right"
                    data-aos="zoom-in"
                    data-aos-delay="1100"
                    data-aos-once="true" data-aos-duration={1000}
                    data-aos-duration={1000}
                  >
                    <img src={imgA2} alt="" />
                  </div>
                </div>
                {/* <!-- Single Progress --> */}
                <div
                  className="single-widgets pr-md-18 pr-lg-0 pl-lg-10 pl-xl-22 mb-10 mb-lg-0 text-center text-md-left"
                  data-aos="zoom-in"
                  data-aos-delay="300"
                  data-aos-once="true" data-aos-duration={1000}
                  data-aos-duration={1000}
                >
                  <div className="square-97 bg-dodger-blue-2 rounded-10 mb-10 shadow-bg-dodger-blue-2 mx-auto mx-md-0 text-white font-size-9">
                    <i className="fa fa-file-signature" />
                  </div>
                  <div className="">
                    <h3 className="font-size-8 m-0">Sign Up</h3>
                    <p className="font-size-5 line-height-28 mb-0">
                      Fill out the interest form
                    </p>
                  </div>
                </div>
                {/* <!-- End Single Progress --> */}
                {/* <!-- Single Progress --> */}
                <div
                  className="single-widgets pr-md-18 pr-lg-0 pl-lg-10 pl-xl-22 mb-10 mb-lg-0 text-center text-md-left"
                  data-aos="zoom-in"
                  data-aos-delay="900"
                  data-aos-once="true" data-aos-duration={1000}
                  data-aos-duration={1000}
                >
                  <div className="square-97 bg-dodger-blue-2 rounded-10 mb-10 shadow-bg-dodger-blue-2 mx-auto mx-md-0">
                    <img src={imgE} alt="" />
                  </div>
                  <div className="">
                    <h3 className="font-size-8 m-0">Demo</h3>
                    <p className="font-size-5 line-height-28 mb-0">
                    Schedule a demo lesson with your instructor
                    </p>
                  </div>
                </div>
                {/* <!-- End Single Progress --> */}
                {/* <!-- Single Progress --> */}
                <div
                  className="single-widgets pr-md-18 pr-lg-0 pl-lg-10 pl-xl-22 mb-10 mb-lg-0 text-center text-md-left"
                  data-aos="zoom-in"
                  data-aos-delay="1300"
                  data-aos-once="true" data-aos-duration={1000}
                  data-aos-duration={1000}
                >
                  <div className="square-97 bg-dodger-blue-2 rounded-10 mb-10 shadow-bg-dodger-blue-2 mx-auto mx-md-0">
                    <img src={imgR} alt="" />
                  </div>
                  <div className="">
                    <h3 className="font-size-8 m-0">Start!</h3>
                    <p className="font-size-5 line-height-28 mb-0">
                    Get started with your 8-week customized program
                    </p>
                  </div>
                </div>
                {/* <!-- End Single Progress --> */}
              </div>
            </div>
          </div>
          {/* <!-- End Progress Items --> */}
        </div>
      </div>
    </>
  );
};

export default NextSteps;
