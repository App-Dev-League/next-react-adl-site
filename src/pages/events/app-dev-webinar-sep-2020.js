import React from "react";
import Image from "next/image"
import Head from "next/head";
import Link from "next/link";

import PageWrapper from "../../components/PageWrapper";
import heroPhoto from "../../assets/events/app-dev-webinar-sep-2020.png"
import Testimonials from "../../sections/events/Testimonials";

const EventPage = () => {
  const testimonials = [
    {
      content:
        `
        App Dev webinar was really easy to understand as a beginner. They answered every question that was thrown at them and they made sure that we could understand what they were talking about. It was well paced and had good structure.

    `,
      userlink: "- Meria",
      grade: "11th grader"
    },
    {
      content:
        `I am so happy that I attended the webinar! I am quite experienced in ML but needed more experience in the app development field, so this really helped!

    `,
      userlink: "- Srini",
      grade: "9th grader"
    },
    {
      content:
        `I am happy I learned about applications. My favorite part was learning about technology through the games.

      `,
      userlink: "- Latoya",
      grade: "10th grader"
    },
    {
      content:
        `I really enjoyed the webinar. I would recommend other people to take the App Dev courses.
    `,
      userlink: "- Ashna",
      grade: "8th grade"
    }
  ];
  
  return (
    <>
      <Head>
        <title>Application Development Webinar | App Dev League</title>
        <meta name="description" content="In this 2-hour webinar, students from grades 4-12 learned the basics of website development and created a simple website."></meta>
        <meta property="og:description" content="In this 2-hour webinar, students from grades 4-12 learned the basics of website development and created a simple website."></meta>
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
                  App Dev Webinar
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
                      With this Application Development webinar, students from grades 4-12 will learn the basics of computer science with a focus on website and application development. This course will not only provide a strong understanding and basis for computer science, but it will introduce modern tools and the implications of application development in our everyday lives. By the end of this 2 hour webinar, students will have a deeper understanding of how app and website development can benefit us. They will also learn how to create a basic calculator and hangman game.
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
                          <strong>2 hour long</strong> webinar
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
                        Online zoom sessions
                      </li>
                      <li className="position-relative font-size-5 heading-default-color pl-8 d-flex mb-7">
                        <span className="circle-9 mr-3 mt-4 bg-black" />
                        <div>Note: <strong>This webinar is for students who are interested in programming and are committed to attending the entire duration of this webinar. NO PRIOR PROGRAMMING EXPERIENCE NEEDED.</strong></div>
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
