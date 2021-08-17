import React, { useEffect } from "react";
import Head from "next/head";

import PageWrapper from "../components/PageWrapper";

const Contact = () => {
  useEffect(() => {
    // Here "addEventListener" is for standards-compliant web browsers and "attachEvent" is for IE Browsers.
    var eventMethod = window.addEventListener ? "addEventListener" : "attachEvent";
    var eventer = window[eventMethod];

    var messageEvent = eventMethod == "attachEvent" ? "onmessage" : "message";

    // Listen to message from child IFrame window
    eventer(messageEvent, function (e) {
      try {
        if (e.data.includes("TOGATECH_CODETOOLS_FRAME")) {
          var size = JSON.parse(e.data.replace("TOGATECH_CODETOOLS_FRAME", ""));
          var frame = document.querySelector('#contact-frame');
          frame.width = size.width;
          frame.height = size.height;
        }
      } catch (err) {
      }
    }, false);
  }, [])

  return (
    <>
      <Head>
        <title>Contact | App Dev League</title>
        <meta name="description" content="Have something to say? Shoot us a message!" />
        <meta property="og:description" content="Have something to say? Shoot us a message!" />
      </Head>
      <PageWrapper
        themeConfig={{
          headerClassName: "site-header--menu-right dark-mode-texts bg-default-1",
          footerStyle: "style3",
        }}
      >
        <div className="min-height-100vh d-flex align-items-center pt-23 pt-md-26 pt-lg-30 pb-8 pb-md-12 pb-lg-23">
          <div className="container">
            {/* Section Title */}
            <div className="row justify-content-center">
              <div className="col-xl-12">
                <div
                  className="mb-10 mb-lg-18 text-center"
                  data-aos="fade-up"
                  data-aos-duration={300}
                  data-aos-once="true"
                >
                  <h2 className="font-size-11 mb-7">Contact us</h2>
                  <p className="font-size-7 mb-0">
                    Have something to say? Shoot us a message!
                  </p>
                </div>
              </div>
            </div>
            {/* End Section Title */}
            {/* Contact Form */}
            <div className="row justify-content-center">
              <div className="col-12">
                {/* contact details */}
                <div
                  className="top-contact-info bg-adl-1 max-w-700 mx-auto py-10 px-13 rounded-10"
                  data-aos="fade-up"
                  data-aos-duration={600}
                  data-aos-once="true"
                >
                  <div className="row">
                    <div className="col-lg-8 mb-5 mb-lg-0">
                      <div className="border-md-right border-cornflower-blue">
                        <h4 className="font-size-5 text-default-color font-weight-normal mb-0">
                          Email us
                        </h4>
                        <a
                          className="font-size-7 font-weight-bold heading-default-color"
                          href="mailto:contact@appdevleague.org"
                        >
                          contact@appdevleague.org
                        </a>
                      </div>
                    </div>
                    <div className="col-lg-4 mb-5 mb-lg-0">
                      <h4 className="font-size-5 text-default-color font-weight-normal mb-0">
                        Find us on
                      </h4>
                      <ul className="list-unstyled d-flex align-items-center mb-0 mt-1">
                        <li>
                          <a
                            href="https://www.instagram.com/appdevleague/"
                            className="heading-default-color gr-hover-text-blue-3"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className="fab fa-instagram" />
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://discord.gg/FtegFYAuZ6"
                            className="heading-default-color gr-hover-text-blue-3 ml-7"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className="fab fa-discord" />
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.youtube.com/channel/UCxhMD8Fvm5LP6QzdrYnFixA"
                            className="heading-default-color gr-hover-text-blue-3 ml-7"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className="fab fa-youtube" />
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.linkedin.com/company/appdevleague/"
                            className="heading-default-color gr-hover-text-blue-3 ml-7"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className="fab fa-linkedin" />
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.facebook.com/appdev.league"
                            className="heading-default-color gr-hover-text-blue-3 ml-7"
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
                {/* contact details */}
                <div className="pt-12 pb-10 max-w-700 mx-auto">
                  <iframe
                    src="https://codetools.togatech.org/contact-form/KabirR/XV32iSd9cp/contact"
                    className="w-100 border-0"
                    id="contact-frame"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </PageWrapper>
    </>
  );
};
export default Contact;
