import React from "react";
import Image from "next/image"
import Head from "next/head";
import Link from "next/link";
import TeamMemberCard from "../../components/TeamMemberCard";

import PageWrapper from "../../components/PageWrapper";
import heroPhoto from "../../assets/events/advanced-multi-disciplinary-cs-course-june-2021.png"
import img1 from "../../assets/execs/shafin.png";
import img2 from "../../assets/execs/kabir.png";
import img3 from "../../assets/instructors/vishnu.png";
import img4 from "../../assets/directors/joe.png";
import img5 from "../../assets/instructors/pavan.png";
import img6 from "../../assets/instructors/Arjun.png";

const EventPage = () => {
  const instructors = [
    {
      image: img1,
      name: "Shafin Haque"
    },
    {
      image: img2,
      name: "Kabir Ramzan"
    },
    {
      image: img3,
      name: "Vishnu Mangipudi"
    },
    {
      image: img4,
      name: "Joe Li"
    },
    {
      image: img5,
      name: "Pavan Yeddanapudi"
    },
    {
      image: img6,
      name: "Arjun Dixit"
    }
  ];

  return (
    <>
      <Head>
        <title>Adv Multi-Discipline CS Course 2021 | App Dev League</title>
        <meta name="description" content="In this 4-week course, students will explore many different CS disciplines, including AI/ML, Web Dev, USACO Competitive Programming, and more."></meta>
        <meta property="og:description" content="In this 4-week course, students will explore many different CS disciplines, including AI/ML, Web Dev, USACO Competitive Programming, and more."></meta>
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
                  Advanced Multi-Disciplinary CS Course
                  </h2>
                  <p className="bg-dark-green-op1 font-size-6 font-weight-medium badge mb-0 py-2 px-4">
                    <span className="text-dark-green">Event Completed 🚀</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="row justify-content-center mt-11 mt-lg-15">
              <div
                className="col-lg-6 mb-10 mb-lg-0"
                data-aos="fade-right"
                data-aos-duration={1000}
              >
                <div className="pt-8 pb-5 pt-lg-12 pb-lg-10 px-8 px-lg-10 px-xl-15 card shadow-2 border-0 gr-hover-2 transition-200 h-100">
                  <div className="article-block">
                    <h5 className="font-size-7 mb-6">Description</h5>
                    <p className="font-size-5 heading-default-color">
                    This Advanced CS course is recommended for high school students (grades 9-12), but welcome to Middle Schools students who have programming experience. Topics that we will cover include Machine Learning, Website Development, and Competitive Programming. In addition to lectures about these concepts, students will implement a variety of programs to see their progress as they take the course. We believe that this course will allow students to delve deep into advanced CS concepts that are typically taught in college.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-6"
                data-aos="fade-left"
                data-aos-duration={1000}
              >
                <div className="pt-8 pb-5 pt-lg-12 pb-lg-10 px-8 px-lg-10 px-xl-15 card shadow-2 border-0 gr-hover-2 transition-200 h-100">
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
                          <strong>4 week</strong> intensive course
                        </div>
                      </li>
                      <li className="position-relative font-size-5 heading-default-color pl-0 d-flex mb-7">
                        <div className="circle-event mr-3 text-white">
                          <i className="fa fa-check" />
                        </div>
                        <div>
                          <strong>2 sessions</strong> per week
                        </div>
                      </li>
                      <li className="position-relative font-size-5 heading-default-color pl-0 d-flex mb-7">
                        <div className="circle-event mr-3 text-white">
                          <i className="fa fa-check" />
                        </div>
                        <div><strong>1.5 hours</strong> per session</div>
                      </li>
                      <li className="position-relative font-size-5 heading-default-color pl-0 d-flex mb-7">
                        <div className="circle-event mr-3 text-white">
                          <i className="fa fa-check" />
                        </div>
                        <div>Required Materials: <strong>Computer, internet,</strong> and optional notebook.</div>
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
                        <div>Note: This course is for students who are interested in programming and are committed to attending ALL sessions unless excused. <strong>PRIOR PROGRAMMING EXPERIENCE NEEDED.</strong></div>
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
                        <div className="py-5 px-8 p-lg-10 card shadow-2 border-0 gr-hover-2 transition-200 h-100 flex-row">
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
                                Day 1: Intro to Web Dev & Bootstrap
                                </div>
                              </li>
                              <li className="position-relative font-size-5 heading-default-color pl-0 d-flex">
                                <div className="circle-event mr-3 text-white">
                                  <i className="fa fa-calendar-check" />
                                </div>
                                <div>
                                Day 2: Intro to Flask
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 mb-8">
                        <div className="py-5 px-8 p-lg-10 card shadow-2 border-0 gr-hover-2 transition-200 h-100 flex-row">
                          <div className="d-flex flex-column mr-10 align-items-center">
                            <span>Week</span>
                            <span className="font-size-10 heading-default-color">2</span>
                          </div>
                          <div>
                            <ul className="p-0 m-0 list-disc">
                              <li className="position-relative font-size-5 heading-default-color pl-0 d-flex mb-7">
                                <div className="circle-event mr-3 text-white">
                                  <i className="fa fa-calendar-check" />
                                </div>
                                <div>
                                Day 3: Intro to Neural Networks
                                </div>
                              </li>
                              <li className="position-relative font-size-5 heading-default-color pl-0 d-flex">
                                <div className="circle-event mr-3 text-white">
                                  <i className="fa fa-calendar-check" />
                                </div>
                                <div>
                                Day 4: Intro to CNNs
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 mb-8">
                        <div className="py-5 px-8 p-lg-10 card shadow-2 border-0 gr-hover-2 transition-200 h-100 flex-row">
                          <div className="d-flex flex-column mr-10 align-items-center">
                            <span>Week</span>
                            <span className="font-size-10 heading-default-color">3</span>
                          </div>
                          <div>
                            <ul className="p-0 m-0 list-disc">
                              <li className="position-relative font-size-5 heading-default-color pl-0 d-flex mb-7">
                                <div className="circle-event mr-3 text-white">
                                  <i className="fa fa-calendar-check" />
                                </div>
                                <div>
                                Day 5: ML & Flask App
                                </div>
                              </li>
                              <li className="position-relative font-size-5 heading-default-color pl-0 d-flex">
                                <div className="circle-event mr-3 text-white">
                                  <i className="fa fa-calendar-check" />
                                </div>
                                <div>
                                Day 6: ML & Flask App Continued
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 mb-8">
                        <div className="py-5 px-8 p-lg-10 card shadow-2 border-0 gr-hover-2 transition-200 h-100 flex-row">
                          <div className="d-flex flex-column mr-10 align-items-center">
                            <span>Week</span>
                            <span className="font-size-10 heading-default-color">4</span>
                          </div>
                          <div>
                            <ul className="p-0 m-0 list-disc">
                              <li className="position-relative font-size-5 heading-default-color pl-0 d-flex mb-7">
                                <div className="circle-event mr-3 text-white">
                                  <i className="fa fa-calendar-check" />
                                </div>
                                <div>
                                Day 7: Intro to Competitive Coding
                                </div>
                              </li>
                              <li className="position-relative font-size-5 heading-default-color pl-0 d-flex">
                                <div className="circle-event mr-3 text-white">
                                  <i className="fa fa-calendar-check" />
                                </div>
                                <div>
                                Day 8: Intro to Recursion & Graphs
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* article-block */}
                  <div
                    className="mt-11 mt-md-16"
                    data-aos="fade-up"
                    data-aos-duration={1000}
                  >
                    <h5 className="font-size-7 mb-7">Instructors</h5>
                    <div className="row justify-content-center mb-n9">
                      {instructors.map((item, index) => (
                        <div
                          className="col-md-6 col-lg-4"
                          key={index}
                        >
                          <TeamMemberCard options={item} />
                        </div>
                      ))}
                    </div>
                  </div>
                  <div
                    className="mt-11 mt-md-16"
                    data-aos="fade-up"
                    data-aos-duration={1000}
                  >
                    <h5 className="font-size-7 mb-7">Testimonials</h5>
                    <p className="font-size-5 heading-default-color mb-9 font-italic">
                      Testimonials will be posted soon
                    </p>
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
              </div>
            </div>
          </div>
        </main>
      </PageWrapper>
    </>
  );
};
export default EventPage;
