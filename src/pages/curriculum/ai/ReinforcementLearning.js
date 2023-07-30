/** @format */

import React from "react";
import Head from "next/head";

import PageWrapper from "../../../components/PageWrapper";
import CurriculumPage from "../../../sections/curriculum/CurriculumPage";

const PricingPage = () => {
  return (
    <>
      <Head>
        <title>Reinforcement Learning Tutorial| App Dev League</title>
        <meta
          name='description'
          content='Learn about reinforcement learning using OpenAI Gym!'></meta>
        <meta
          property='og:description'
          content='Learn about reinforcement learning using OpenAI Gym!'></meta>
      </Head>
      <PageWrapper
        themeConfig={{
          headerClassName:
            "site-header--menu-right dark-mode-texts bg-default-1",
          footerStyle: "style3",
        }}>
        <CurriculumPage
          filePath='../../curriculum/ai/ReinforcementLearning.md'
          title='Reinforcement Learning with Open AI Gym'
          description='Learn reinforcement learning methods using Open AI Gym!'
        />
      </PageWrapper>
    </>
  );
};
export default PricingPage;
