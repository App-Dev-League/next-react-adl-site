import React from "react";
import Image from "next/image"
import Head from "next/head";
import Link from "next/link";

import PageWrapper from "../../components/PageWrapper";
import heroPhoto from "../../assets/events/introductory-application-development-course-june-2021.jpeg"

const EventPage = () => {
  return (
    <>
      <Head>
        <title>App Developer Workshop | App Dev League</title>
        <meta name="description" content="The ADL App Developer Workshop is a 2-day interactive event that covers the basics of web and app development."></meta>
        <meta property="og:description" content="The ADL App Developer Workshop is a 2-day interactive event that covers the basics of web and app development."></meta>
      </Head>
      <PageWrapper
        themeConfig={{
          headerClassName: "site-header--menu-right dark-mode-texts bg-default-1",
          footerStyle: "style3",
        }}
      >
        <main className="pt-23 pt-md-27 pb-13 pb-md-19 pt-lg-29 pb-lg-27">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12">
                {/* job-details-content */}
                <div className="text-center pb-0">
                  <div style={{position: "relative", width: "100%", height: "55vh", borderRadius: "0.625rem", overflow:"hidden"}}>
                    <Image src={heroPhoto} layout="fill" className="next-image-cover" alt="" priority={true} />
                  </div>
                  <h2 className="font-size-11 font-weight-bold text-center mb-8 mt-15">
                  App Developer Workshop
                  </h2>
                </div>
              </div>
            </div>
            <div className="row justify-content-center mt-11 mt-lg-15">
              <div
                className="col-lg-6 mb-10 mb-lg-0"
                data-aos="fade-right"
                data-aos-duration={1000}
              >
                <div className="pt-8 pb-5 pt-lg-12 pb-lg-10 px-8 px-lg-10 px-xl-15 card shadow-2 gr-hover-2 transition-200 h-100">
                  <div className="article-block">
                    <h5 className="font-size-7 mb-6">Description</h5>
                    <p className="font-size-5 heading-default-color">
                    The ADL App Developer Workshop is a 2-day interactive event that covers the basics of web and app development.
                    <br/> <br/>
                    This workshop will be held on the weekend of October 23-24. Our beginner session will be on the 23rd from 10 am - 12 pm (PDT). Our intermediate session will be on the 24th from 10 am - 12 pm (PDT). Students may sign up for both sessions of the workshops.
                    <br/> <br/>
                    The beginner workshop focuses on teaching students how to build cool mobile apps by using MIT app inventor and the intermediate workshop will introduce the basics of front-end web programming to build websites. No prior programming experience is required.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-6"
                data-aos="fade-left"
                data-aos-duration={1000}
              >
                <div className="pt-8 pb-5 pt-lg-12 pb-lg-10 px-8 px-lg-10 px-xl-15 card shadow-2 gr-hover-2 transition-200 h-100">
                  {/* article-block */}
                  <div>
                    {/* block-title */}
                    <h5 className="font-size-7 mb-6">
                      Course Info
                    </h5>
                    {/* term-list */}
                    <ul className="p-0 m-0 list-disc">
                      <li className="position-relative font-size-5 heading-default-color pl-0 d-flex mb-7">
                        <div className="circle-event mr-3 text-white">
                          <i className="fa fa-check" />
                        </div>
                        <div>
                          <strong>2 day</strong> workshop
                        </div>
                      </li>
                      <li className="position-relative font-size-5 heading-default-color pl-0 d-flex mb-7">
                        <div className="circle-event mr-3 text-white">
                          <i className="fa fa-check" />
                        </div>
                        <div>
                          <strong>2 hours</strong> per session
                        </div>
                      </li>
                      <li className="position-relative font-size-5 heading-default-color pl-0 d-flex mb-7">
                        <div className="circle-event mr-3 text-white">
                          <i className="fa fa-check" />
                        </div>
                        <div>Required Materials: <strong>Computer, Internet,</strong> and optional notebook for notes</div>
                      </li>
                      <li className="position-relative font-size-5 heading-default-color pl-0 d-flex mb-7">
                        <div className="circle-event mr-3 text-white">
                          <i className="fa fa-check" />
                        </div>
                        Online zoom sessions
                      </li>
                      <li className="position-relative font-size-5 heading-default-color pl-0 d-flex mb-7">
                        <div className="circle-event mr-3 text-white">
                          <i className="fa fa-check" />
                        </div>
                        <div>Note: <strong>This course is for elementary and middle school students who are interested in building apps and websites. NO PRIOR PROGRAMMING EXPERIENCE NEEDED</strong></div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-12">
                {/* terms-contents  */}
                <div className="pt-lg-0 pt-10">
                  {/* article-block */}
                  <div
                    className="mt-11 mt-md-16"
                    data-aos="fade-up"
                    data-aos-duration={1000}
                  >
                    <h5 className="font-size-7 mb-7">Agenda</h5>
                    <div className="row mb-n10">
                      <div className="col-lg-6 mb-8">
                        <div className="py-5 px-8 p-lg-10 card shadow-2 gr-hover-2 transition-200 h-100 flex-row">
                          <div className="d-flex flex-column mr-10 align-items-center">
                            <span>Week</span>
                            <span className="font-size-10 heading-default-color">1</span>
                          </div>
                          <div>
                            <ul className="p-0 m-0 list-disc">
                              <li className="position-relative font-size-5 heading-default-color pl-0 d-flex mb-7">
                                <div className="circle-event mr-3 text-white">
                                  <i className="fa fa-calendar-check" />
                                </div>
                                <div>
                                Day 1: Beginner Session, mobile applications
                                </div>
                              </li>
                              <li className="position-relative font-size-5 heading-default-color pl-0 d-flex">
                                <div className="circle-event mr-3 text-white">
                                  <i className="fa fa-calendar-check" />
                                </div>
                                <div>
                                Day 2: Intermediate Session, web applications
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="apply-btn pt-7 pt-md-13"
              data-aos="fade-up"
              data-aos-duration={1000}
            >
              <Link href="/events">
                <a className="btn btn-sm btn-blue-3 rounded-5">
                  Back
                </a>
              </Link>
            </div>
          </div>
        </main>
      </PageWrapper>
    </>
  );
};
export default EventPage;
