import React from "react";
import Image from "next/image"
import Head from "next/head";
import Link from "next/link";

import PageWrapper from "../../components/PageWrapper";
import heroPhoto from "../../assets/events/game-jam-apr-2022.jpeg"

const EventPage = () => {
  return (
    <>
      <Head>
        <title>Game Jam | App Dev League</title>
        <meta name="description" content="The ADL Game Jam is a competition and learning event.  Schools will be provided materials to teach their students how to create a game, and teams can use these resources to create an app that conforms to the theme."></meta>
        <meta property="og:description" content="The ADL Game Jam is a competition and learning event.  Schools will be provided materials to teach their students how to create a game, and teams can use these resources to create an app that conforms to the theme."></meta>
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
                  Game Jam
                  </h2>
                </div>
                <div
                    className="apply-btn pt-0 pt-md-0 text-center"
                    data-aos="fade-up"
                    data-aos-duration={1000}
                  >
                    <Link href="https://docs.google.com/forms/d/1AQYOL67oakKUzPXPgGTTpR1QJvLroPxISzE-XVsMakk/edit">
                      <a className="btn btn-sm btn-blue-3 rounded-5" target="_blank">
                        Sign Up!
                      </a>
                    </Link>
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
                    The ADL Game Jam is a competition and learning event.  Schools will be provided materials to teach their students how to create a game, and teams can use these resources to create an app that conforms to the theme.
                    <br/><br/>
                    The theme for the 2022 Game Jam is education, and teams have to create an educational game that helps students with their learning. Examples of this include Quizlet, Kahoot!, DragonBox, and more.
                    <br/><br/>
                    Awards will be given to the top teams, and they include cash, licenses, and sponsor credits, totaling $10k.
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
                      Rules
                    </h5>
                    {/* term-list */}
                    <ul className="p-0 m-0 list-disc">
                      <li className="position-relative font-size-5 heading-default-color pl-0 d-flex mb-7">
                        <div className="circle-event mr-3 text-white">
                          <i className="fa fa-check" />
                        </div>
                        <div>
                          Teams may be of any size, however, they must all be from the same school.
                        </div>
                      </li>
                      <li className="position-relative font-size-5 heading-default-color pl-0 d-flex mb-7">
                        <div className="circle-event mr-3 text-white">
                          <i className="fa fa-check" />
                        </div>
                        <div>
                          Teams may have mentors, however, the students must write the majority of the code.
                        </div>
                      </li>
                      <li className="position-relative font-size-5 heading-default-color pl-0 d-flex mb-7">
                        <div className="circle-event mr-3 text-white">
                          <i className="fa fa-check" />
                        </div>
                        <div>
                          All code must be written during the time frame.
                        </div>
                      </li>
                      <li className="position-relative font-size-5 heading-default-color pl-0 d-flex mb-7">
                        <div className="circle-event mr-3 text-white">
                          <i className="fa fa-check" />
                        </div>
                        <div>
                          Code can not be plagiarized, but online resources may be used for help.
                        </div>
                      </li>
                    </ul>
                  </div>
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
                  {/* article-block */}
                  <div>
                    {/* block-title */}
                    <h5 className="font-size-7 mb-6">
                      Submission Guidelines
                    </h5>
                    {/* term-list */}
                    <ul className="p-0 m-0 list-disc">
                      <li className="position-relative font-size-5 heading-default-color pl-0 d-flex mb-7">
                        <div className="circle-event mr-3 text-white">
                          <i className="fa fa-check" />
                        </div>
                        <div>
                          The game should be built on a codebase that uses the resources that are provided to all schools.
                        </div>
                      </li>
                      <li className="position-relative font-size-5 heading-default-color pl-0 d-flex mb-7">
                        <div className="circle-event mr-3 text-white">
                          <i className="fa fa-check" />
                        </div>
                        <div>
                          The game idea does not have to be original but should not be a direct clone of an existing game.
                        </div>
                      </li>
                      <li className="position-relative font-size-5 heading-default-color pl-0 d-flex mb-7">
                        <div className="circle-event mr-3 text-white">
                          <i className="fa fa-check" />
                        </div>
                        <div>
                          All games must have some level of functionality.
                        </div>
                      </li>
                      <li className="position-relative font-size-5 heading-default-color pl-0 d-flex mb-7">
                        <div className="circle-event mr-3 text-white">
                          <i className="fa fa-check" />
                        </div>
                        <div>
                          All games must have a system of progression (points, levels, checkpoints, etc.).
                        </div>
                      </li>
                      <li className="position-relative font-size-5 heading-default-color pl-0 d-flex mb-7">
                        <div className="circle-event mr-3 text-white">
                          <i className="fa fa-check" />
                        </div>
                        <div>
                          All games must have a public link to the demo video (on YouTube or another similar platform) as well as the codebase (on GitHub, for example).
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-6"
                data-aos="fade-left"
                data-aos-duration={1000}
              >
                <div className="pt-8 pb-5 pt-lg-12 pb-lg-10 px-8 px-lg-10 px-xl-15 card shadow-2 gr-hover-2 transition-200 h-100">
                  <div className="article-block">
                    <h5 className="font-size-7 mb-6">Judging Criteria</h5>
                    <p className="font-size-5 heading-default-color">
                    <div>
                      Games will be judged based on three criteria: <strong>technicality</strong>, <strong>impact</strong>, and <strong>demo</strong>. Teams can earn a score of 0 to 5 points for each category, and each project will be graded by multiple judges. Technicality involves the code, and how complex an app is. Although teams must use the given resources, teams can still be creative and write more complex code. Impact is based on how helpful the game is for students, as well as how big the target audience is. Lastly, the demo portion is graded on how well a team displays its project’s features, as well as the experience users have while playing the game.
                    </div>
                    </p>
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
                    <h5 className="font-size-7 mb-7">Schedule</h5>
                    <div>
                      <p className="font-size-5 heading-default-color mb-9">
                        <ul>
                          <li>Keynote Speaker</li>
                          <li>School Presentations</li>
                          <li>Award Ceremony</li>
                        </ul>
                      </p>
                    </div>
                    <div>
                      <p className="font-size-5 heading-default-color mb-9 font-italic">
                      If you would like more information about our event curriculum, please contact us <Link href="/contact">
                        <a>here.</a>
                        </Link>
                      </p>
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
              </div>
            </div>
          </div>
        </main>
      </PageWrapper>
    </>
  );
};
export default EventPage;
