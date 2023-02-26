/** @format */

import React from "react";
import Head from "next/head";

import PageWrapper from "../../../components/PageWrapper";
import CurriculumPage from "../../../sections/curriculum/CurriculumPage";

const PricingPage = () => {
  return (
    <>
      <Head>
        <title>Teachable Machine Tutorial| App Dev League</title>
        <meta
          name='description'
          content='Learn how to use teachable machine to create basic ML models!'></meta>
        <meta
          property='og:description'
          content='Learn how to use teachable machine to create basic ML models!'></meta>
      </Head>
      <PageWrapper
        themeConfig={{
          headerClassName:
            "site-header--menu-right dark-mode-texts bg-default-1",
          footerStyle: "style3",
        }}>
        <CurriculumPage
          filePath='../../curriculum/ai/TeachableMachine.md'
          title='Teachable Machine'
          description='Learn how to use teachable machine to create basic ML models'
        />
      </PageWrapper>
    </>
  );
};
export default PricingPage;
