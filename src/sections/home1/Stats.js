import React from "react";
import CountUp from "react-countup";
import LazyLoad from "react-lazyload";

const Stats = () => {
  return (
    <div className="bg-default-3 pt-13 pt-md-18 pt-lg-23 pb-5 pb-md-9 pb-lg-23">
      <div className="container">
        <div className="row justify-content-center text-center">
          {/* Single Counter */}
          <div className="col-lg-3 col-md-3 col-xs-6">
            <div
              className="mb-11 mb-lg-0"
              data-aos="fade-up"
              data-aos-duration={300}
            >
              <h2 className="font-size-12 mb-5">
                <LazyLoad>
                  <span className="counter">
                    <CountUp duration={2} end={7500} />
                  </span>
                </LazyLoad>
              </h2>

              <p className="heading-default-color mb-0 font-size-5">
                students impacted
              </p>
            </div>
          </div>
          {/* End Single Counter */}
          {/* Single Counter */}
          <div className="col-lg-3 col-md-3 col-xs-6">
            <div
              className="mb-11 mb-lg-0"
              data-aos="fade-up"
              data-aos-duration={300}
            >
              <h2 className="font-size-12 mb-5">
                <LazyLoad>
                  <span className="counter">
                    <CountUp duration={3} end={75} />
                  </span>
                </LazyLoad>
              </h2>
              <p className="heading-default-color mb-0 font-size-5">
                national/chapter officers
              </p>
            </div>
          </div>
          {/* End Single Counter */}
          {/* Single Counter */}
          <div className="col-lg-3 col-md-3 col-xs-6">
            <div
              className="mb-11 mb-lg-0"
              data-aos="fade-up"
              data-aos-duration={900}
            >
              <h2 className="font-size-12 mb-5">
                <LazyLoad>
                  <span className="counter">
                    <CountUp duration={3} end={50} />
                  </span>
                </LazyLoad>
              </h2>
              <p className="heading-default-color mb-0 font-size-5">
                sponsors, partners, and schools worked with
              </p>
            </div>
          </div>
          {/* End Single Counter */}
          {/* Single Counter */}
          <div className="col-lg-3 col-md-3 col-xs-6">
            <div
              className="mb-11 mb-lg-0"
              data-aos="fade-up"
              data-aos-duration={1200}
            >
              <h2 className="font-size-12 mb-5">
                <LazyLoad>
                  <span className="counter">
                    <CountUp duration={3} end={20} />
                  </span>
                </LazyLoad>
              </h2>
              <p className="heading-default-color mb-0 font-size-5">
                events and initiatives
              </p>
            </div>
          </div>
          {/* End Single Counter */}
        </div>
      </div>
    </div>
  );
};

export default Stats;
