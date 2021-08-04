import React from "react";
import Image from "next/image"
import Head from "next/head";
import Link from "next/link";

import PageWrapper from "../../components/PageWrapper";
import heroPhoto from "../../assets/events/basic-web-dev-course-jul-2020.jpg"
import Testimonials from "../../sections/events/Testimonials";

const EventPage = () => {
  const testimonials = [
    {
      content:
        `
        App Dev League's "Basic Web Dev" program had a great teacher, willing to help after class, and didnt skip one day.

    `,
      userlink: "- Hunter",
      grade: "10th grader"
    },
    {
      content:
        `App Dev League's Basic Web Dev is was awesome. I went into it trying to learn about how to make a website for my company, and the teacher was awesome and walked us through each part of HTML, CSS, and Javascript, calmly and easily, making the class both fun and enriching!

    `,
      userlink: "- Joshua",
      grade: "9th grader"
    },
    {
      content:
        `This class was truly fun and cool to learn. I liked how we make a calculator and a restaurant website.
      `,
      userlink: "- Angel",
      grade: "11th grader"
    },
    {
      content:
        `This was my first type of coding class. It was very informative and fun, and I really liked the projects
    `,
      userlink: "- Xavier",
      grade: "7th grader"
    }
  ];
  
  return (
    <>
      <Head>
        <title>Basic Web Dev | App Dev League</title>
        <meta name="description" content="Over the course of 5 weeks, students from grades 6-12 were introduced to basic front-end web development, building many websites throughout the course."></meta>
        <meta property="og:description" content="Over the course of 5 weeks, students from grades 6-12 were introduced to basic front-end web development, building many websites throughout the course."></meta>
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
              <div className="col-xl-11">
                {/* job-details-content */}
                <div className="text-center pb-0">
                  <div style={{position: "relative", width: "100%", height: "55vh", borderRadius: "0.625rem", overflow:"hidden"}}>
                    <Image src={heroPhoto} layout="fill" className="next-image-cover" alt="" priority={true} />
                  </div>
                  <h2 className="font-size-11 font-weight-bold text-center mb-lg-15 mb-0 mt-15">
                  Basic Web Dev
                  </h2>
                  <h3 className="font-size-8 font-weight-bold text-center text-green">
                    Event Completed 🚀
                  </h3>
                </div>
              </div>
              <div className="col-xl-9 col-lg-10 px-xl-0 px-lg-6 px-md-0 px-6 pr-0">
                {/* terms-contents  */}
                <div className="pt-lg-0 pt-10 pl-lg-10 px-xl-15">
                  <div className="article-block mt-11 mt-lg-15">
                    <h5 className="font-size-7 mb-6">Description</h5>
                    <p className="font-size-5 heading-default-color mb-9">   
                    In this Basic Website Development course, students from grades 6-12 will be introduced to the world of web development. This course will introduce students to modern day languages used for building the front-end of websites. Using state-of-the-art tools, we will build many websites throughout the course. In addition to the logical coding aspect of this website, this course will also challenge students' creativity. We believe this course will enable students to develop the front-end of web applications effortlessly.
                    </p>
                  </div>
                  {/* article-block */}
                  <div className="mt-11 mt-lg-16">
                    {/* block-title */}
                    <h5 className="font-size-7 mb-6">
                      Course Info
                    </h5>
                    {/* term-list */}
                    <ul className="p-0 m-0 list-disc">
                      <li className="position-relative font-size-5 heading-default-color pl-8 d-flex mb-7">
                        <span className="circle-9 mr-3 mt-4 bg-black" />
                        <div>
                          <strong>5 week</strong> intensive course
                        </div>
                      </li>
                      <li className="position-relative font-size-5 heading-default-color pl-8 d-flex mb-7">
                        <span className="circle-9 mr-3 mt-4 bg-black" />
                        <div>
                          <strong>2 sessions</strong> per week
                        </div>
                      </li>
                      <li className="position-relative font-size-5 heading-default-color pl-8 d-flex mb-7">
                        <span className="circle-9 mr-3 mt-4 bg-black" />
                        <div>
                        Required Materials: <strong>computer, internet, </strong> and optional notebook for notes!
                        </div>
                      </li>
                      <li className="position-relative font-size-5 heading-default-color pl-8 d-flex mb-7">
                        <span className="circle-9 mr-3 mt-4 bg-black" />
                        Online zoom sessions
                      </li>
                      <li className="position-relative font-size-5 heading-default-color pl-8 d-flex mb-7">
                        <span className="circle-9 mr-3 mt-4 bg-black" />
                        <div>Note: <strong>This course is for students who are interested in web development and are committed to attending ALL sessions unless excused.</strong></div>
                      </li>
                    </ul>
                  </div>
                  {/* article-block */}
                  <div className="mt-11 mt-md-16">
                    <h5 className="font-size-7 mb-7">Agenda</h5>
                    <p className="font-size-5 heading-default-color mb-9 font-italic">
                    If you would like more information about our course curriculum, please contact us <Link href="/contact">
                      <a>here.</a>
                    </Link>
                    </p>
                  </div>
                  <div className="mt-11 mt-md-16">
                    <h5 className="font-size-7 mb-7">Pictures</h5>
                    <p className="font-size-5 heading-default-color mb-9 font-italic">
                    Unfortunately, we are unable to display photos of our classes publicly online. If you would like to see some photos regarding our curriculum or students, please send us an email at <a href="mailto:contact@appdevleague.org">contact@appdevleague.org.</a>
                    </p>
                  </div>
                  <div className="mt-11 mt-md-16">
                    <h5 className="font-size-7 mb-7">Testimonials</h5>
                    <Testimonials items={testimonials} />
                  </div>
                  <div className="apply-btn pt-7 pt-md-13">
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
