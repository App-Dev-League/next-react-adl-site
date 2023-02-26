/** @format */

import React from "react";
import Head from "next/head";

import PageWrapper from "../../../components/PageWrapper";
import CurriculumPage from "../../../sections/curriculum/CurriculumPage";

const PricingPage = () => {
  return (
    <>
      <Head>
        <title>CNN Explanation| App Dev League</title>
        <meta
          name='description'
          content='Learn about Convolutional Neural Networks and computer vision!'></meta>
        <meta
          property='og:description'
          content='Learn about Convolutional Neural Networks and computer vision!'></meta>
      </Head>
      <PageWrapper
        themeConfig={{
          headerClassName:
            "site-header--menu-right dark-mode-texts bg-default-1",
          footerStyle: "style3",
        }}>
        <CurriculumPage
          filePath='../../curriculum/ai/CNNExplanation.md'
          title='CNN Explanation'
          description='Learn about Convolutional Neural Networks and Computer Vision'
        />
      </PageWrapper>
    </>
  );
};
export default PricingPage;
