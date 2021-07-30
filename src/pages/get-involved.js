import React from "react";
import Link from "next/link";
import Head from "next/head";

import PageWrapper from "../components/PageWrapper";
import { Button } from "react-bootstrap";
import logo from "../assets/paypal.svg"

const Faq = () => {
  return (
    <>
      <PageWrapper
        themeConfig={{
          headerClassName: "site-header--menu-right dark-mode-texts bg-default-1",
          footerStyle: "style3",
        }}
      >
        <Head>
          <title>Get Involved | App Dev League</title>
          <meta name="description" content="Want to help our cause? Join the team, sponsor us, contact us, or sign up for an event!" />
          <meta property="og:description" content="Want to help our cause? Join the team, sponsor us, contact us, or sign up for an event!" />
        </Head>
        <div className="pt-23 pt-md-26 pt-lg-31 pb-13 pb-md-18 pb-lg-23">
          <div className="container">
            {/* Section Title */}
            <div className="row justify-content-center">
              <div className="col-xl-8 col-lg-9">
                <div className="text-center mb-13 mb-lg-18">
                  <h2 className="font-size-11 mb-7">
                    Get Involved
                  </h2>
                  <p className="font-size-7 mb-5 px-md-10 px-xl-13">
                    Are you ready to help App Dev League create opportunities for underrepresented groups to take part in full stack development?
                  </p>
                  <p className="font-size-5 mb-0 px-md-10 px-xl-13 text-black">
                    <strong>That's great!</strong> Take a look below to see how to get involved!
                  </p>
                </div>
              </div>
            </div>
            {/* End Section Title */}
            {/* Faqs */}
            {/* Faqs */}
            <div className="row justify-content-center">
              {/* Single Faq */}
              <div className="col-lg-6 col-md-10">
                <div className="d-flex mb-10 mb-lg-17">
                  <div className="mr-6">
                    <div className="bg-light-orange circle-28 text-white mt-1">
                      <i className="fa fa-edit" />
                    </div>
                  </div>
                  <div className="">
                    <h4 className="font-size-7 mb-7">
                      Sign Up!
                    </h4>
                    <p className="font-size-5 pr-md-10 pr-lg-0 mb-7">
                      We have numerous upcoming events. Please visit our <Link href="/events"><a>events</a></Link> page to sign up! If you want more information regarding our course curriculum and requirements for the course, please contact us.
                    </p>
                    <div className="d-flex">
                      <Link href="/events">
                        <a className="mr-4">
                          <Button className="btn-dodger-blue-2 rounded-5" size="sm">
                            View events
                          </Button>
                        </a>
                      </Link>
                      <Link href="/contact">
                        <a>
                          <Button className="btn-dodger-blue-2 rounded-5" size="sm">
                            Contact us
                          </Button>
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Single Faq */}
              {/* Single Faq */}
              <div className="col-lg-6 col-md-10">
                <div className="d-flex mb-10 mb-lg-17">
                  <div className="mr-6">
                    <div className="bg-light-orange circle-28 text-white mt-1">
                      <i className="fa fa-user-friends" />
                    </div>
                  </div>
                  <div className="">
                    <h4 className="font-size-7 mb-7">
                      Join the Team
                    </h4>
                    <p className="font-size-5 pr-md-10 pr-lg-0 mb-7">
                      If you would like to be a part of the team and help teach underprivileged teenagers the necessary skills they need to become an application developer, please fill out this <a href="https://docs.google.com/forms/d/e/1FAIpQLSdwbrP1plwpsT8PbUTh6mfj9zOz7_T6KfhBYnzA-ZMNMM0D8g/viewform" target="_blank" rel="noopener noreferrer">form</a>. We'd love to hear your potential contributions and programming experience.
                    </p>
                    <a
                      href="https://docs.google.com/forms/d/e/1FAIpQLSdwbrP1plwpsT8PbUTh6mfj9zOz7_T6KfhBYnzA-ZMNMM0D8g/viewform"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="btn-dodger-blue-2 rounded-5" size="sm">
                        Apply now
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
              {/* End Single Faq */}
              {/* Single Faq */}
              <div className="col-lg-6 col-md-10">
                <div className="d-flex mb-10 mb-lg-17">
                  <div className="mr-6">
                    <div className="bg-light-orange circle-28 text-white mt-1">
                      <i className="fa fa-handshake" />
                    </div>
                  </div>
                  <div className="">
                    <h4 className="font-size-7 mb-7">
                      Sponsor or Partner
                    </h4>
                    <p className="font-size-5 pr-md-10 pr-lg-0 mb-7">
                      App Dev League would appreciate any organizations' contributions, ranging from curriculum to money for our events. These offerings will help us benefit our cause for educating underprivileged students. Please fill out the following forms if you would like to sponsor (monetary) or partner (content/curriculum) with us.
                    </p>
                    <div className="d-flex mb-7">
                      <a
                        href="https://docs.google.com/forms/d/e/1FAIpQLSdGTXgl9B298jTSScmUUH8YmQDP6IcDRf2Evs10SFlMd81Mtw/viewform"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mr-4"
                      >
                        <Button className="btn-dodger-blue-2 rounded-5" size="sm">
                          Sponsor us
                        </Button>
                      </a>
                      <a
                        href="https://tiny.cc/partnerADL"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button className="btn-dodger-blue-2 rounded-5" size="sm">
                          Partner with us
                        </Button>
                      </a>
                    </div>
                    <p className="font-size-5 pr-md-10 pr-lg-0 mb-7">
                      <a
                        href="/ADL-Sponsor-Package.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        See our sponsorship package
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              {/* End Single Faq */}
              {/* Single Faq */}
              <div className="col-lg-6 col-md-10">
                <div className="d-flex mb-10 mb-lg-17">
                  <div className="mr-6">
                    <div className="bg-light-orange circle-28 text-white mt-1">
                      <i className="fa fa-hand-holding-usd" />
                    </div>
                  </div>
                  <div className="">
                    <h4 className="font-size-7 mb-7">
                      Donate
                    </h4>
                    <p className="font-size-5 pr-md-10 pr-lg-0 mb-7">
                      Regardless of the amount, every dollar helps us provide the necessary app development skills for underpriveleged youth. Your donations can help us obtain the resources we need that we can't afford othwerise. If you are interested in donating, please contact us by <a href="mailto:contact@appdevleague.org">email</a>.
                    </p>
                    <form action="https://www.paypal.com/donate" method="post" target="_top">
                      <input type="hidden" name="hosted_button_id" value="L2TWT9EFVL6KE" />
                      <button border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" value="Donate with PayPal" className="btn-dodger-blue-2 rounded-5 btn btn-primary btn-sm pr-4"><img src={logo} alt="" className="h-100 mr-4 p-1" />Donate with PayPal</button>
                      <img alt="" border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
                    </form>
                  </div>
                </div>
              </div>
              {/* End Single Faq */}
            </div>
          </div>
        </div>
      </PageWrapper>
    </>
  );
};
export default Faq;
