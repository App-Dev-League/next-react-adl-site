/** @format */

import React from "react";
import Head from "next/head";

import PageWrapper from "../../../components/PageWrapper";
import CurriculumPage from "../../../sections/curriculum/CurriculumPage";

const PricingPage = () => {
  return (
    <>
      <Head>
        <title>Intro to NumPy| App Dev League</title>
        <meta
          name='description'
          content='Learn about data science in Python using NumPy!'></meta>
        <meta
          property='og:description'
          content='Learn about data science in Python using NumPy!'></meta>
      </Head>
      <PageWrapper
        themeConfig={{
          headerClassName:
            "site-header--menu-right dark-mode-texts bg-default-1",
          footerStyle: "style3",
        }}>
        <CurriculumPage
          filePath='../../curriculum/ai/IntroToNumpy.md'
          title='Intro to NumPy'
          description='Learn about the library that powers almost all of data science with Python'
        />
      </PageWrapper>
    </>
  );
};
export default PricingPage;
