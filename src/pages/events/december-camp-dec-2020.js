import React from "react";
import Image from "next/image"
import Head from "next/head";
import Link from "next/link";

import PageWrapper from "../../components/PageWrapper";
import heroPhoto from "../../assets/events/december-camp-dec-2020.jpeg"
import Testimonials from "../../sections/events/Testimonials";

const EventPage = () => {
  const testimonials = [
    {
      content:
        `
        I enjoyed the coding program at App Dev League! It was fun, and I learned many new things, and added on to many things I know. My favorite thing was the Tic-Tac-Toe game, as it shows game designing, something I enjoy alot.​

    `,
      userlink: "- Tejas",
      grade: "9th grader"
    },
    {
      content:
        `Before this camp, I had tried out other coding camps, but none of them were great. Then I got an email from App Dev League. I hesitated to sign-up, but I eventually did and that was probably the best choice I have made coding-wise before this camp. I didn't know anything about code, but with this camp, I have learned more about coding in more than all of the other classes combined! The greatest thing about this camp is that it is free!!! The instructors are great, and so on, there isn't much you could say is bad, so if you are reading this, you have to try out this camp.
    `,
      userlink: "- Alex",
      grade: "6th grader"
    },
    {
      content:
        `I appreciate App Dev League in general because they offer such programs amid pandemic. Their mission is relevant to everyone, especially those who are anxious about what's happening in the world right now, that nothing can stop them from learning new things or mastering their skills. As a student, taking the time and making efforts are not a joke. They still manage to contribute to society regardless of their plans and time. I am very grateful for all the help. Thank you for such a wonderful contribution!
      `,
      userlink: "- Zyrene",
      grade: "11th grader"
    },
    {
      content:
        `I learned so much more about coding, and I especially enjoyed making my own website and learning about Machine Learning. I took lots of notes that I will hold onto for future coding!
    `,
      userlink: "- Hannah",
      grade: "5th grader"
    }
  ];
  
  return (
    <>
      <Head>
        <title>Winter Bootcamp 2020 | App Dev League</title>
        <meta name="description" content="Over the course of 5 days, students (5-12 grade) explored many sectors of computer science, finding which discipline is best for them."></meta>
        <meta property="og:description" content="Over the course of 5 days, students (5-12 grade) explored many sectors of computer science, finding which discipline is best for them."></meta>
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
                  CS Winter Bootcamp
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
                    This CS Winter Boot Camp will enable students from grades 5-12 to explore different areas of computer science, such as website development and artificial intelligence. Our goal is to enable students to delve into different disciplines of computer science to see what catches their interest. We will be using a variety of programming languages, such as Python, HTML, and CSS throughout the workshop. Not only will students be able to learn more about computer science through interactive exercises, but you will also be able to build several hands-on computer science projects! We hope to see you there!
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
                          <strong>4 day</strong> camp
                        </div>
                      </li>
                      <li className="position-relative font-size-5 heading-default-color pl-0 d-flex mb-7">
                        <div className="circle-event mr-3 text-white">
                          <i className="fa fa-check" />
                        </div>
                        <div>Required Materials: <strong>functional computer, internet,</strong> and optional notebook for notes!</div>
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
                        <div>Note: <strong>This camp is meant for students with some level of coding experience or those who have attended our events in the past. However, students without knowledge of computer science are still welcome to attend and learn along!</strong></div>
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
