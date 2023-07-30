/** @format */

import React from "react";
import Head from "next/head";

import PageWrapper from "../../../components/PageWrapper";
import CurriculumPage from "../../../sections/curriculum/CurriculumPage";

const PricingPage = () => {
  return (
    <>
      <Head>
        <title>Intro to GANs| App Dev League</title>
        <meta
          name='description'
          content='Learn about AI art and General Adversarial Networks!'></meta>
        <meta
          property='og:description'
          content='Learn about AI art and General Adversarial Networks!'></meta>
      </Head>
      <PageWrapper
        themeConfig={{
          headerClassName:
            "site-header--menu-right dark-mode-texts bg-default-1",
          footerStyle: "style3",
        }}>
        <CurriculumPage
          filePath='../../curriculum/ai/IntroToGANS.md'
          title='Intro to GANs'
          description='Learn about AI art and General Adversarial Networks'
        />
      </PageWrapper>
    </>
  );
};
export default PricingPage;