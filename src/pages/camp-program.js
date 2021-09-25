import React from "react";
import Head from "next/head";

import PageWrapper from "../components/PageWrapper";
import Hero from "../sections/camp-program/Hero";
import Examples from "../sections/camp-program/Examples";
import Benefits from "../sections/camp-program/Benefits";
import Overview from "../sections/camp-program/Overview";
import NextSteps from "../sections/camp-program/NextSteps";

const MEETProgram = () => {
  return (
    <>
      <Head>
        <title>CAMP Program | App Dev League</title>
        <meta name="description" content="The CAMP program allows organizations (non profits, school clubs, etc..) to have their websites and apps built within weeks. For free."></meta>
        <meta property="og:description" content="The CAMP program allows organizations (non profits, school clubs, etc..) to have their websites and apps built within weeks. For free."></meta>
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
        <Examples />
        <NextSteps className="pb-lg-21 border-top border-default-color-1" />
      </PageWrapper>
    </>
  );
};
export default MEETProgram;
