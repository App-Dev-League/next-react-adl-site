/** @format */

import React from "react";
import Head from "next/head";

import PageWrapper from "../../../components/PageWrapper";
import CurriculumPage from "../../../sections/curriculum/CurriculumPage";

const PricingPage = () => {
  return (
    <>
      <Head>
        <title>Transfer Learning Tutorial| App Dev League</title>
        <meta
          name='description'
          content='Learn how transfer learning works!'></meta>
        <meta
          property='og:description'
          content='Learn how transfer learning works!'></meta>
      </Head>
      <PageWrapper
        themeConfig={{
          headerClassName:
            "site-header--menu-right dark-mode-texts bg-default-1",
          footerStyle: "style3",
        }}>
        <CurriculumPage
          filePath='../../curriculum/ai/TransferLearning.md'
          title='Transfer Learning'
          description='Learn how to use pre-existing models to perform transfer learning'
        />
      </PageWrapper>
    </>
  );
};
export default PricingPage;
