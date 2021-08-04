import React from "react";
import Image from "next/image"
import Head from "next/head";
import Link from "next/link";

import PageWrapper from "../../components/PageWrapper";
import heroPhoto from "../../assets/events/learn-to-code-workshop-nov-2020.jpg"
import Testimonials from "../../sections/events/Testimonials";

const EventPage = () => {
  const testimonials = [
    {
      content:
        `
        I really enjoyed learning some basics of Javascript. It was a nice way to spend my time and the workshop was interesting.

    `,
      userlink: "- Anjolique",
      grade: "11th grader"
    },
    {
      content:
        `I really enjoyed the "Learn to Code" workshop that App Dev League held in Nov 2020. They helped me learn to code and other people who haven't had any experience in coding. They made it very simple to understand and gave us an opportunity to create our own code and experience.
    `,
      userlink: "- Kevin",
      grade: "10th grader"
    },
    {
      content:
        `The App Dev League's "Learn to Code" workshop was a great experience! I have never coded before, and this was a great place to start! Our instructor gave very thorough and simple instructions to help out us beginners, but I still learned a lot. Overall, a very well run class, and I appreciate it.

      `,
      userlink: "- Harrison",
      grade: "10th grader"
    },
    {
      content:
        `I had so much fun at App dev League's "learn to code" webinar! They explained the basics of programming and then showed me how to apply them when we made rock paper scissors game! I feel like I leaned so much this is a great event for anyone of any skill level!
    `,
      userlink: "- Dana",
      grade: "12th grader"
    }
  ];
  
  return (
    <>
      <Head>
        <title>Learn to Code Workshop 2020 | App Dev League</title>
        <meta name="description" content="This 90-minute webinar taught students (grades 3-12) with no coding experience the basics of CS using JavaScript."></meta>
        <meta property="og:description" content="This 90-minute webinar taught students (grades 3-12) with no coding experience the basics of CS using JavaScript."></meta>
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
                  Learn to Code Workshop
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
                    This "Learn to Code in 90 minutes" workshop will enable students from grades 3-12, with no prior computer science experience, to learn what computer science is and how to create simple projects and games. We will be using JavaScript throughout the workshop. Not only will you be able to learn more about computer science through fun kahoots, but you will also be able to build several hands-on computer science projects and listen to a professional speaker in 90 minutes! We hope to see you there!
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
                          <strong>1.5 hour long</strong> webinar
                        </div>
                      </li>
                      <li className="position-relative font-size-5 heading-default-color pl-8 d-flex mb-7">
                        <span className="circle-9 mr-3 mt-4 bg-black" />
                        <div>
                          <strong>One-time webinar (not recurring)</strong>
                        </div>
                      </li>
                      <li className="position-relative font-size-5 heading-default-color pl-8 d-flex mb-7">
                        <span className="circle-9 mr-3 mt-4 bg-black" />
                        <div>Required Materials: <strong>computer, internet,</strong> and optional notebook for notes!</div>
                      </li>
                      <li className="position-relative font-size-5 heading-default-color pl-8 d-flex mb-7">
                        <span className="circle-9 mr-3 mt-4 bg-black" />
                        Online zoom sessions
                      </li>
                      <li className="position-relative font-size-5 heading-default-color pl-8 d-flex mb-7">
                        <span className="circle-9 mr-3 mt-4 bg-black" />
                        <div>Note: <strong>This workshop is meant for students who have NO prior coding experience. If you don't know Python but are familiar with another programming language, you are more than welcome to attend!</strong></div>
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
