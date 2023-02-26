/** @format */

import React from "react";
import Head from "next/head";

import PageWrapper from "../../../components/PageWrapper";
import CurriculumPage from "../../../sections/curriculum/CurriculumPage";

const PricingPage = () => {
  return (
    <>
      <Head>
        <title>BMI Calculator Tutorial| App Dev League</title>
        <meta
          name='description'
          content='Learn how to make your own BMI calculator using Flutter!'></meta>
        <meta
          property='og:description'
          content='Learn how to make your own BMI calculator using Flutter!'></meta>
      </Head>
      <PageWrapper
        themeConfig={{
          headerClassName:
            "site-header--menu-right dark-mode-texts bg-default-1",
          footerStyle: "style3",
        }}>
        <CurriculumPage
          filePath='../../curriculum/webdev/BMICalculator.md'
          title='BMI Calculator'
          description='Make a BMI Calculator application using Flutter'
        />
      </PageWrapper>
    </>
  );
};
export default PricingPage;
