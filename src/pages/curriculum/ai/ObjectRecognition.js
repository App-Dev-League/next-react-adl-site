/** @format */

import React from "react";
import Head from "next/head";

import PageWrapper from "../../../components/PageWrapper";
import CurriculumPage from "../../../sections/curriculum/CurriculumPage";

const PricingPage = () => {
  return (
    <>
      <Head>
        <title>Object Recognition Tutorial| App Dev League</title>
        <meta
          name='description'
          content='Learn about Object recognition as it applies to AI and Computer Vision!'></meta>
        <meta
          property='og:description'
          content='Learn about Object recognition as it applies to AI and Computer Vision!'></meta>
      </Head>
      <PageWrapper
        themeConfig={{
          headerClassName:
            "site-header--menu-right dark-mode-texts bg-default-1",
          footerStyle: "style3",
        }}>
        <CurriculumPage
          filePath='../../curriculum/ai/ObjectRecognition.md'
          title='Object Recognition'
          description='Learn about Object recognition as it applies to AI and Computer Vision'
        />
      </PageWrapper>
    </>
  );
};
export default PricingPage;
