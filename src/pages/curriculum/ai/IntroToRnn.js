/** @format */

import React from "react";
import Head from "next/head";

import PageWrapper from "../../../components/PageWrapper";
import CurriculumPage from "../../../sections/curriculum/CurriculumPage";

const PricingPage = () => {
  return (
    <>
      <Head>
        <title>Intro to RNNs| App Dev League</title>
        <meta
          name='description'
          content='Learn about Recurrent Neural Networks!'></meta>
        <meta
          property='og:description'
          content='Learn about Recurrent Neural Networks!'></meta>
      </Head>
      <PageWrapper
        themeConfig={{
          headerClassName:
            "site-header--menu-right dark-mode-texts bg-default-1",
          footerStyle: "style3",
        }}>
        <CurriculumPage
          filePath='../../curriculum/ai/IntroToRnn.md'
          title='Intro to RNNs'
          description='Learn about Recurrent Neural Networks and their applications in AI'
        />
      </PageWrapper>
    </>
  );
};
export default PricingPage;
