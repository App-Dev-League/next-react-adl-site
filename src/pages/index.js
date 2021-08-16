import React from "react";
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

const IndexPage = () => {
  return (
    <>
      <Head>
        <title>Home | App Dev League</title>
        <meta name="description" content="App Dev League, a student-led non profit, is devoted to bringing computer science education to underrepresented students." />
        <meta property="og:description" content="App Dev League, a student-led non profit, is devoted to bringing computer science education to underrepresented students." />
      </Head>
      <PageWrapper
        themeConfig={{
          headerClassName: "site-header--menu-right dark-mode-texts bg-default-1",
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
      </PageWrapper>
    </>
  );
};
export default IndexPage;
