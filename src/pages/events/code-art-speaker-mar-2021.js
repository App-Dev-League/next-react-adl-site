import React from "react";
import Image from "next/image"
import Head from "next/head";
import Link from "next/link";

import PageWrapper from "../../components/PageWrapper";
import heroPhoto from "../../assets/events/CodeArt_Fest_2021_-_Hopin_Banner.jpg"

const EventPage = () => {

  return (
    <>
      <Head>
        <title>Code/Art Event | App Dev League</title>
        <meta name="description" content="In this 1-hour workshop, students learned about the basics of app development and created an app with MIT app inventor."></meta>
        <meta property="og:description" content="In this 1-hour workshop, students learned about the basics of app development and created an app with MIT app inventor."></meta>
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
                  Code/Art Speaker event Mar 2021
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
                      At the Code/Art festival hosted by Code Art, we will be giving an informative workshop on the basics of Application Development. Not only will this workshop provide a strong introductory educational basis for students to learn about application development, but you will also get hands-on experience with MIT app inventor. This is a girls-only event, and prior registration is required here.
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
                          <strong>1 hour</strong> workshop
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
                        <div>One-time event (not recurring)</div>
                      </li>
                      <li className="position-relative font-size-5 heading-default-color pl-8 d-flex mb-7">
                        <span className="circle-9 mr-3 mt-4 bg-black" />
                        <div>Required Materials: <strong>Computer, internet,</strong> and optionally a notebook</div>
                      </li>
                      <li className="position-relative font-size-5 heading-default-color pl-8 d-flex mb-7">
                        <span className="circle-9 mr-3 mt-4 bg-black" />
                        Online hopin session
                      </li>
                      <li className="position-relative font-size-5 heading-default-color pl-8 d-flex mb-7">
                        <span className="circle-9 mr-3 mt-4 bg-black" />
                        Note: this workshop is meant for girls in grades 6-12. NO prior programming experience is required. Whether you are intrigued by applications or need to learn it for a project, you are more than welcome to attend!
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
