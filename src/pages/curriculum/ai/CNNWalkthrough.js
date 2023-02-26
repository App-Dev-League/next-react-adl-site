import React from "react";
import Head from "next/head";

import PageWrapper from "../../../components/PageWrapper";
import CurriculumPage from "../../../sections/curriculum/CurriculumPage";

const PricingPage = () => {
  return (
    <>
      <Head>
        <title>CNN Project Walkthrough| App Dev League</title>
        <meta
          name='description'
          content='Build a project using Convolutional Neural Neworks!'></meta>
        <meta
          property='og:description'
          content='Build a project using Convolutional Neural Neworks!'></meta>
      </Head>
      <PageWrapper
        themeConfig={{
          headerClassName:
            "site-header--menu-right dark-mode-texts bg-default-1",
          footerStyle: "style3",
        }}>
        <CurriculumPage
          filePath='../../curriculum/ai/CNNWalkthrough.md'
          title='CNN Walkthrough'
          description='Implement a digit recognition program using Convolutional Neural Networks in Python!'
        />
      </PageWrapper>
    </>
  );
};
export default PricingPage;
