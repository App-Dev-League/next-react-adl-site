import React from "react";
import Image from "next/image"
import Head from "next/head";
import Link from "next/link";

import PageWrapper from "../../components/PageWrapper";
import heroPhoto from "../../assets/events/intro-to-programming-course-jul-2020.jpg"
import Testimonials from "../../sections/events/Testimonials";

const EventPage = () => {
  const testimonials = [
    {
      content:
        `
        This was truly helpful for me, as it helped push me in the right direction to help me pursue my dream of being a game dev/working for a game dev company. This was an amazing class, thank you for doing this for students who are interested in coding.

    `,
      userlink: "- Anthony",
      grade: "12th grader"
    },
    {
      content:
        `App ​Dev League's "Intro to Programming" [course] is useful to learn basic programming and the teacher is great, gives summary, goes as slow as needed, stays after class to help. 10/10.

    `,
      userlink: "- Hunter",
      grade: "10th grader"
    },
    {
      content:
        `App Dev League​'s "Intro to Programming" [course] was a very well prepared 8 session program. The instructor was very clear in describing how the codes work and was willing to help if any questions arose during coding. It was really worth my time joining this program!
      `,
      userlink: "- Jerry",
      grade: "10th grader"
    },
    {
      content:
        `I'm really glad my mother signed me up for "Intro to Programming" because I learned so many​ new things that I never knew about. I 100% recommend joining these in the future. They are fun and interesting if you're into coding or want to learn it. I really enjoyed making the hangman game.
    `,
      userlink: "- Angel",
      grade: "11th grader"
    }
  ];
  
  return (
    <>
      <Head>
        <title>Intro to Programming Course | App Dev League</title>
        <meta name="description" content="In this 4-week course, students (grade 6-12) learned the basics of Python, providing them with a strong foundation for further CS adventures."></meta>
        <meta property="og:description" content="In this 4-week course, students (grade 6-12) learned the basics of Python, providing them with a strong foundation for further CS adventures."></meta>
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
                  Intro to Programming
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
                <div className="pt-8 pb-5 pt-lg-12 pb-lg-10 px-8 px-lg-10 px-xl-15 card shadow-2 gr-hover-2 transition-200 h-100">
                  <div className="article-block">
                    <h5 className="font-size-7 mb-6">Description</h5>
                    <p className="font-size-5 heading-default-color">
                    With this Intro to Programming course, students from grades 6-12 will learn the basics of programming in Python. This course will provide a strong basis for the upcoming, more advanced courses centered around website and app development. Some of the concepts that will be explained include loops, conditional statements, and object oriented programming. In addition to lectures about these concepts, students will implement basic programs to see their progress as they take the course. We believe that this course will allow students to effortlessly program small-scale applications in Python.
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
                        <div>
                          <strong>1.5 hours</strong> for each session
                        </div>
                      </li>
                      <li className="position-relative font-size-5 heading-default-color pl-0 d-flex mb-7">
                        <div className="circle-event mr-3 text-white">
                          <i className="fa fa-check" />
                        </div>
                        <div>
                        Required Materials: <strong>computer, internet, </strong> and optional notebook for notes!
                        </div>
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
                        <div>Note: <strong>This course is for students who are interested in programming and are committed to attending ALL sessions unless excused. NO PRIOR PROGRAMMING EXPERIENCE NEEDED.</strong></div>
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
                    <p className="font-size-5 heading-default-color mb-9 font-italic">
                    If you would like more information about our course curriculum, please contact us <Link href="/contact">
                      <a>here.</a>
                    </Link>
                    </p>
                  </div>
                  <div
                    className="mt-11 mt-md-16"
                    data-aos="fade-up"
                    data-aos-duration={1000}
                  >
                    <h5 className="font-size-7 mb-7">Pictures</h5>
                    <p className="font-size-5 heading-default-color mb-9 font-italic">
                    Unfortunately, we are unable to display photos of our classes publicly online. If you would like to see some photos regarding our curriculum or students, please send us an email at <a href="mailto:contact@appdevleague.org">contact@appdevleague.org.</a>
                    </p>
                  </div>
                  {/* article-block */}
                  <div
                    className="mt-11 mt-md-16"
                    data-aos="fade-up"
                    data-aos-duration={1000}
                  >
                    <h5 className="font-size-7 mb-7">Testimonials</h5>
                    <Testimonials items={testimonials} />
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
