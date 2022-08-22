import React from "react";
import Head from "next/head";

import PageWrapper from "../components/PageWrapper";
import Hero from "../sections/star-program/Hero";
import Benefits from "../sections/star-program/Benefits";
import Overview from "../sections/star-program/Overview";
import NextSteps from "../sections/star-program/NextSteps";
import PreviewOfContent1 from "../sections/star-program/PreviewOfContent1";
import PreviewOfContent2 from "../sections/star-program/PreviewOfContent2";
import PreviewOfContent3 from "../sections/star-program/PreviewOfContent3";
import Devnetic from "../sections/star-program/Devnetic";

const STARProgram = () => {
  return (
    <>
      <Head>
        <title>STAR Program | App Dev League</title>
        <meta
          name="description"
          content="The STAR program is an opportunity for Title 1 (underprivileged) schools and low-income centers to utilize our free CS resources. These resources will be used in an ADL sponsored after-school program for your school."
        ></meta>
        <meta
          property="og:description"
          content="The STAR program is an opportunity for Title 1 (underprivileged) schools and low-income centers to utilize our free CS resources. These resources will be used in an ADL sponsored after-school program for your school."
        ></meta>
      </Head>
      <PageWrapper
        themeConfig={{
          headerClassName: "site-header--menu-right dark-mode-texts",
          footerStyle: "style3",
        }}
      >
        <Hero />
        <Overview className="pt-12 pt-lg-25" />
        <Benefits className="py-12 py-lg-25" />
        <Devnetic />
        <PreviewOfContent1 className="py-12 py-lg-25" />
        <PreviewOfContent2 className="py-12 py-lg-25" />
        <PreviewOfContent3 className="py-12 py-lg-25" />
        <NextSteps className="pb-lg-21 border-top border-default-color-1" />
      </PageWrapper>
    </>
  );
};
export default STARProgram;
