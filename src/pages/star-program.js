import React from "react";
import Head from "next/head";

import PageWrapper from "../components/PageWrapper";
import Hero from "../sections/star-program/Hero";
import Offerings from "../sections/star-program/Offerings";
import Benefits from "../sections/star-program/Benefits";
import Overview from "../sections/star-program/Overview";
import NextSteps from "../sections/star-program/NextSteps";

const STARProgram = () => {
  return (
    <>
      <Head>
        <title>STAR Program | App Dev League</title>
        <meta name="description" content="The STAR program is an opportunity for Title 1 (underprivileged) schools and low-income centers to utilize our free CS resources. These resources will be used in an ADL sponsored after-school program for your school."></meta>
        <meta property="og:description" content="The STAR program is an opportunity for Title 1 (underprivileged) schools and low-income centers to utilize our free CS resources. These resources will be used in an ADL sponsored after-school program for your school."></meta>
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
export default STARProgram;
