import React from "react";
import Head from "next/head";

import PageWrapper from "../components/PageWrapper";
import Hero from "../sections/mentorship/Hero";
import Offerings from "../sections/mentorship/Offerings";
import Benefits from "../sections/mentorship/Benefits";
import Overview from "../sections/mentorship/Overview";
import NextSteps from "../sections/mentorship/NextSteps";

const MEETProgram = () => {
  return (
    <>
      <Head>
        <title>MEET Program | App Dev League</title>
        <meta name="description" content="The MEET program allows students, regardless of their background, to receive free 1 on 1 mentorship on various topics such as Mobile App Development, Web Development, and Artificial Intelligence."></meta>
        <meta property="og:description" content="The MEET program allows students, regardless of their background, to receive free 1 on 1 mentorship on various topics such as Mobile App Development, Web Development, and Artificial Intelligence."></meta>
      </Head>
      <PageWrapper
        themeConfig={{
          headerClassName: "site-header--menu-right dark-mode-texts",
          footerStyle: "style3"
        }}
      >
        <Hero />
        <Overview className="pt-12 pt-lg-25" />
        <Benefits className="py-12 py-lg-25" />
        <Offerings />
        <NextSteps className="pb-lg-21 border-top border-default-color-1" />
      </PageWrapper>
    </>
  );
};
export default MEETProgram;
