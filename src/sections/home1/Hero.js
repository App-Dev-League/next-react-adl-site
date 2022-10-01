import React from "react";
import Link from "next/link";

import imgM from "../../assets/hero-img.png";
import imgYS from "../../assets/image/home-6/png/cirle-yellow-shape.png";

const Hero = ({ className, ...rest }) => {
  return (
    <div className={className} {...rest}>
      <div className="container position-static">
        <div className="row align-items-center justify-content-center position-static flex-column-reverse flex-lg-row">
          {/* Hero Image */}
          <div className="col-lg-6 col-md-9 col-sm-11">
            <div
              className="mt-8 mt-lg-0 pr-md-11 pr-lg-0 pr-xl-10"
              data-aos="fade-left"
              data-aos-delay={750}
            >
              <h1 className="font-size-112 mb-8 line-height-84">
                App Dev League
              </h1>
              <p className="font-size-6 mb-0 pr-sm-10 pr-md-10 pr-lg-0 pr-xl-18">
                Diversifying the Application Developer Community
              </p>
              <div className="mt-10 d-flex flex-wrap mb-n6">
                <Link href="/get-involved">
                  <a className="btn btn-dodger-blue-2 btn-3 rounded-5 mr-6 mb-6">
                    Get Involved
                  </a>
                </Link>
                <Link href="/events">
                  <a className="btn btn-dodger-blue-2 btn-3 rounded-5 mb-6">
                    View Events
                  </a>
                </Link>
              </div>
            </div>
          </div>
          {/* End Hero Image */}
          {/* Hero Content */}
          <div className="col-xl-6 col-lg-6 col-md-12 position-static">
            <iframe
              src="https://docs.google.com/presentation/d/e/2PACX-1vRRqCoPoOEW4q5KdnK_HYGhSJ3eHWazJHBfAZrt8TWbDI6jbFa7YhPjg37PJ8GVY5BZmacL5sHMKEC2/embed?start=false&loop=false&delayms=3000"
              frameborder="0"
              width="100%"
              height="100%"
              allowfullscreen="true"
              mozallowfullscreen="true"
              webkitallowfullscreen="true"
              style={{ minHeight: "300px", borderRadius: ".75rem" }}
            ></iframe>
          </div>
          {/* End Hero Content */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
