/** @format */

import React from "react";
import Head from "next/head";

import PageWrapper from "../../../components/PageWrapper";
import CurriculumPage from "../../../sections/curriculum/CurriculumPage";

const PricingPage = () => {
  return (
    <>
      <Head>
        <title>Linear Regression| App Dev League</title>
        <meta
          name='description'
          content='Learn about Linear Regression methods for AI!'></meta>
        <meta
          property='og:description'
          content='Learn about Linear Regression methods for AI!'></meta>
      </Head>
      <PageWrapper
        themeConfig={{
          headerClassName:
            "site-header--menu-right dark-mode-texts bg-default-1",
          footerStyle: "style3",
        }}>
        <CurriculumPage
          filePath='../../curriculum/ai/LinReg.md'
          title='Linear Regression'
          description='Learn about one of the most fundamental methods in machine learning'
        />
      </PageWrapper>
    </>
  );
};
export default PricingPage;
