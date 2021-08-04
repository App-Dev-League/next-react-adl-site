import React from "react";
import Image from "next/image"
import Head from "next/head";
import Link from "next/link";
import TeamMemberCard from "../../components/TeamMemberCard";

import PageWrapper from "../../components/PageWrapper";
import heroPhoto from "../../assets/events/introductory-application-development-course-june-2021.jpeg"
import img6 from "../../assets/execs/kabir.png";
import img7 from "../../assets/instructors/ashwin.png";
import img8 from "../../assets/krish-square.jpg";
import img9 from "../../assets/instructors/Arjun.png";
import img10 from "../../assets/instructors/Kunal.png";
import img11 from "../../assets/instructors/Matthew.jpg";

const EventPage = () => {
  const instructors = [
    {
      image: img6,
      name: "Kabir Ramzan",
      title: "Days 1-2",
    },
    {
      image: img7,
      name: "Ashwin Kuppahally",
      title: "Days 3-5, 7",
    },
    {
      image: img8,
      name: "Krish Maniar",
      title: "Days 5, 6, 8",
    },
    {
      image: img9,
      name: "Arjun Dixit",
      title: "Days 3, 4",
    },
    {
      image: img10,
      name: "Kunal Jain",
      title: "Days 5-8",
    },
    {
      image: img11,
      name: "Matthew",
      title: "Day 5",
    }
  ];

  return (
    <>
      <Head>
        <title>App Dev Course 2021 | App Dev League</title>
        <meta name="description" content="In this 5-week course, students will learn to build apps with a variety of tools, including HTML/CSS/JS and MIT app inventor."></meta>
        <meta property="og:description" content="In this 5-week course, students will learn to build apps with a variety of tools, including HTML/CSS/JS and MIT app inventor."></meta>
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
                    App Dev Course
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
                      With this Intro to App Development course, students from grades 6-12 will learn the basics of website & application development in a variety of tools (HTML, CSS, JS, MIT app inventor). This course will provide a strong basis for students to build comprehensive web apps. Some of the concepts that will be explained include HTML tags, CS properties, JavaScript manipulation of the DOM, and more. In addition to lectures about these concepts, students will implement basic programs to see their progress as they take the course. We believe that this course will allow students to effortlessly program small-scale applications.
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
                        <div><strong>2 hours</strong> per session</div>
                      </li>
                      <li className="position-relative font-size-5 heading-default-color pl-8 d-flex mb-7">
                        <span className="circle-9 mr-3 mt-4 bg-black" />
                        <div>Required Materials: <strong>Computer, internet,</strong> and optional notebook for notes</div>
                      </li>
                      <li className="position-relative font-size-5 heading-default-color pl-8 d-flex mb-7">
                        <span className="circle-9 mr-3 mt-4 bg-black" />
                        Online zoom sessions
                      </li>
                      <li className="position-relative font-size-5 heading-default-color pl-8 d-flex mb-7">
                        <span className="circle-9 mr-3 mt-4 bg-black" />
                        <div>Note: This course is for students who are interested in programming and are committed to attending ALL sessions unless excused. <strong>NO PRIOR PROGRAMMING EXPERIENCE NEEDED.</strong></div>
                      </li>
                    </ul>
                  </div>
                  {/* article-block */}
                  <div className="mt-11 mt-md-16">
                    <h5 className="font-size-7 mb-7">Agenda</h5>
                    <p className="font-size-5 heading-default-color">
                      Week 1:
                    </p>
                    <ul className="p-0 m-0 list-disc">
                      <li className="position-relative font-size-5 heading-default-color pl-8 d-flex mb-7">
                        <span className="circle-9 mr-3 mt-4 bg-black" />
                        <div>
                        Day 1: Intro to Web Dev
                        </div>
                      </li>
                      <li className="position-relative font-size-5 heading-default-color pl-8 d-flex mb-7">
                        <span className="circle-9 mr-3 mt-4 bg-black" />
                        <div>
                        Day 2: Advanced CSS
                        </div>
                      </li>
                    </ul>
                    <p className="font-size-5 heading-default-color">
                      Week 2:
                    </p>
                    <ul className="p-0 m-0 list-disc">
                      <li className="position-relative font-size-5 heading-default-color pl-8 d-flex mb-7">
                        <span className="circle-9 mr-3 mt-4 bg-black" />
                        <div>
                        Day 3: Full Project with HTML/CSS
                        </div>
                      </li>
                      <li className="position-relative font-size-5 heading-default-color pl-8 d-flex mb-7">
                        <span className="circle-9 mr-3 mt-4 bg-black" />
                        <div>
                        Day 4: JavaScript Basics
                        </div>
                      </li>
                    </ul>
                    <p className="font-size-5 heading-default-color">
                      Week 3:
                    </p>
                    <ul className="p-0 m-0 list-disc">
                      <li className="position-relative font-size-5 heading-default-color pl-8 d-flex mb-7">
                        <span className="circle-9 mr-3 mt-4 bg-black" />
                        <div>
                        Day 5: JavaScript Projects
                        </div>
                      </li>
                      <li className="position-relative font-size-5 heading-default-color pl-8 d-flex mb-7">
                        <span className="circle-9 mr-3 mt-4 bg-black" />
                        <div>
                        Day 6: Intro to MIT App Inventor
                        </div>
                      </li>
                    </ul>
                    <p className="font-size-5 heading-default-color">
                      Week 4:
                    </p>
                    <ul className="p-0 m-0 list-disc">
                      <li className="position-relative font-size-5 heading-default-color pl-8 d-flex mb-7">
                        <span className="circle-9 mr-3 mt-4 bg-black" />
                        <div>
                        Day 7: MIT APP Inventor Projects
                        </div>
                      </li>
                      <li className="position-relative font-size-5 heading-default-color pl-8 d-flex mb-7">
                        <span className="circle-9 mr-3 mt-4 bg-black" />
                        <div>
                        Day 8: Review Apps
                        </div>
                      </li>
                    </ul>
                  </div>
                  {/* article-block */}
                  <div className="mt-11 mt-md-16">
                    <h5 className="font-size-7 mb-7">Instructors</h5>
                    <div className="row justify-content-center">
                      {instructors.map((item, index) => (
                        <div
                          className="col-md-6"
                          key={index}
                        >
                          <TeamMemberCard options={item} />
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="mt-11 mt-md-16">
                    <h5 className="font-size-7 mb-7">Testimonials</h5>
                    <p className="font-size-5 heading-default-color mb-9 font-italic">
                      Testimonials will be posted soon
                    </p>
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
