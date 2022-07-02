import React, { useEffect, useState } from "react";
import Head from "next/head";

import PageWrapper from "../components/PageWrapper";
import Hero from "../sections/home1/Hero";
import AboutUs from "../sections/home1/AboutUs";
import OurExperience from "../sections/home1/OurExperience";
import Stats from "../sections/home1/Stats";
import Events from "../sections/home1/Events";
import TechHelp from "../sections/home1/TechHelp";
import Testimonials from "../sections/home1/Testimonials";
import FAQ from "../sections/home1/FAQ"; 
import Popup from 'reactjs-popup';

const IndexPage = () => {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    setOpen(!sessionStorage.getItem("adl-recap-2021-popup-closed"))
  }, [])
  const closeModal = () => {
    setOpen(false)
    sessionStorage.setItem("adl-recap-2021-popup-closed", "true")
  };


  return (
    <>
      <Head>
        <title>Home | App Dev League</title>
        <meta name="description" content="App Dev League, a student-led non profit, is devoted to bringing computer science education to underrepresented students." />
        <meta property="og:description" content="App Dev League, a student-led non profit, is devoted to bringing computer science education to underrepresented students." />
      </Head>
      <PageWrapper
        themeConfig={{
          headerClassName: "site-header--menu-right dark-mode-texts",
          footerStyle: "style3"
        }}
      >
        <Hero className="position-relative pt-25 pt-md-31 pt-lg-35 pb-14 pb-md-19 pb-lg-33 position-relative overflow-hidden hero-bg dark-mode-texts" />
        <AboutUs className="bg-adl-1 pt-12 pt-lg-25 pb-8 pb-lg-20" />
        <OurExperience className="py-12 py-lg-25" />
        <Stats />
        <Events />
        <TechHelp className="bg-adl-1 pt-12 pt-lg-25 pb-12 pb-lg-20" />
        <Testimonials className="pt-12 pt-lg-19 pb-12 pb-lg-17" />
        <FAQ />
        <div suppressHydrationWarning={true}>
          {process.browser && (
            <Popup open={open} closeOnDocumentClick onClose={closeModal}>
              <div className="d-flex flex-column align-items-center">
                <button onClick={closeModal} className="button btn h-auto w-auto d-flex justify-content-end align-self-end py-0 px-3" style={{minWidth: "0"}}>
                  <i className="fa fa-times font-size-8" />
                </button>
                <p>Our Appathon event held this past August 2021 was a great success with 300 participants, 50 submissions, 20 sponsors, and 10 speakers! 🥳 Check out our recap video!</p>
                <iframe width="480" height="270" src="https://www.youtube-nocookie.com/embed/yscfPiaSpmA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
            </Popup>
          )}
        </div>
      </PageWrapper>
    </>
  );
};
export default IndexPage;
