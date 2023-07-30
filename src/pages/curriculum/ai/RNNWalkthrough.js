/** @format */

import React from "react";
import Head from "next/head";

import PageWrapper from "../../../components/PageWrapper";
import CurriculumPage from "../../../sections/curriculum/CurriculumPage";

const PricingPage = () => {
  return (
    <>
      <Head>
        <title>RNN Code Walkthrough| App Dev League</title>
        <meta
          name='description'
          content='Learn how to implement a project using Recurrent Neural Networks!'></meta>
        <meta
          property='og:description'
          content='Learn how to implement a project using Recurrent Neural Networks!'></meta>
      </Head>
      <PageWrapper
        themeConfig={{
          headerClassName:
            "site-header--menu-right dark-mode-texts bg-default-1",
          footerStyle: "style3",
        }}>
        <CurriculumPage
          filePath='../../curriculum/ai/ReinforcementLearning.md'
          title='RNN Code Walkthrough'
          description='Learn how to implement a project using Recurrent Neural Networks'
        />
      </PageWrapper>
    </>
  );
};
export default PricingPage;