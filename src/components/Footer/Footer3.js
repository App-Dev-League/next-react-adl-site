import React from "react";
import Link from "next/link";

import imgLB from "../../assets/image/logo-main-black.png";
import imgLW from "../../assets/image/logo-main-white.png";
import imgFS from "../../assets/image/inner-page/png/yellow-footer-shape.png";

const Footer = ({ className, ...rest }) => {
  return (
    <>
      <div
        className={`bg-dark-cloud pt-12 pt-sm-15 pb-7 dark-mode-texts position-relative overflow-hidden ${className}`}
        {...rest}
      >
        <div className="container">
          <div className="row pb-12 pb-sm-15">
            <div className="col-lg-6 col-md-5 col-md-3 col-xs-8">
              <div className="mt-lg-5">
                <div className="brand-logo mb-5">
                  <p className="font-weight-bold font-size-9">ADL</p>
                </div>
                <p className="font-size-5 text-bali-gray">
                  Copyright © 2019-2022 by App Dev League, Inc.
                </p>
                <p className="font-size-5 text-bali-gray">
                  Registered as a 501(c)(3) tax-deductible non profit organization <br/> (EIN: 85-3376559)
                </p>
                <p className="font-size-5 mb-0 text-bali-gray">
                  Email: <a href="mailto:contact@appdevleague.org">contact@appdevleague.org</a>
                </p>
              </div>
            </div>
            <div className="col-lg-5 col-md-12 offset-xl-1 mt-16 mt-lg-0">
              <div className="row">
                {/* Single Widgets */}
                <div className="col-xs-6">
                  <div className="mb-10 mb-lg-0">
                    <h4 className="font-size-6 font-weight-normal mb-8 text-bali-gray">
                      Menu
                    </h4>
                    <ul className="list-unstyled">
                      <li className="mb-6">
                        <Link href="/">
                          <a className="font-size-5 text-lily-white gr-hover-text-blue-3">
                            Home
                          </a>
                        </Link>
                      </li>
                      <li className="mb-6">
                        <Link href="/about">
                          <a className="font-size-5 text-lily-white gr-hover-text-blue-3">
                            About us
                          </a>
                        </Link>
                      </li>
                      <li className="mb-6">
                        <Link href="/about#team">
                          <a className="font-size-5 text-lily-white gr-hover-text-blue-3">
                            Team
                          </a>
                        </Link>
                      </li>
                      <li className="mb-6">
                        <Link href="/events">
                          <a className="font-size-5 text-lily-white gr-hover-text-blue-3">
                            Events
                          </a>
                        </Link>
                      </li>
                      <li className="mb-6">
                        <Link href="/contact">
                          <a className="font-size-5 text-lily-white gr-hover-text-blue-3">
                            Contact
                          </a>
                        </Link>
                      </li>
                      <li className="mb-6">
                        <Link href="/get-involved">
                          <a className="font-size-5 text-lily-white gr-hover-text-blue-3">
                            Get Involved
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* End Single Widgets */}
                {/* Single Widgets */}
                <div className="col-xs-6">
                  <div className="mb-10 mb-lg-0 mr-xl-12">
                    <h4 className="font-size-6 font-weight-normal mb-8 text-bali-gray">
                      Socials
                    </h4>
                    <div className="mt-7">
                      <ul className="list-unstyled d-flex align-items-center mb-0">
                        <li>
                          <a
                            href="https://www.instagram.com/appdevleague/"
                            className="text-white gr-hover-text-blue-3"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className="fab fa-instagram" />
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://discord.gg/FtegFYAuZ6"
                            className="text-white gr-hover-text-blue-3 ml-7"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className="fab fa-discord" />
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.youtube.com/channel/UCxhMD8Fvm5LP6QzdrYnFixA"
                            className="text-white gr-hover-text-blue-3 ml-7"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className="fab fa-youtube" />
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.linkedin.com/company/appdevleague/"
                            className="text-white gr-hover-text-blue-3 ml-7"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className="fab fa-linkedin" />
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.facebook.com/appdev.league"
                            className="text-white gr-hover-text-blue-3 ml-7"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className="fab fa-facebook-f" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* End Single Widgets */}
              </div>
            </div>
          </div>
          <div className="border-top">
            <div className="row align-items-center pt-10">
              <div className="col-lg-6 text-center text-lg-left">
                <div className="copyright">
                  <p className="mb-0 font-size-3 text-bali-gray">
                    Created and maintained by <a href="https://github.com/orgs/App-Dev-League" target="_blank" rel="noopener noreferrer">App Dev League's</a> Tech Team
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img src={imgFS} alt="" className="footer-yellow-shape-img" />
        </div>
      </div>
    </>
  );
};

export default Footer;
