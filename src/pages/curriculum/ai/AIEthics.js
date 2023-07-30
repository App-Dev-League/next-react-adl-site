/** @format */

import React from "react";
import Head from "next/head";

import PageWrapper from "../../../components/PageWrapper";
import CurriculumPage from "../../../sections/curriculum/CurriculumPage";

const PricingPage = () => {
  return (
    <>
      <Head>
        <title>AI Ethics Article| App Dev League</title>
        <meta
          name='description'
          content='Learn about ethics in the field of artificial intelligence!'></meta>
        <meta
          property='og:description'
          content='Learn about ethics in the field of artificial intelligence!'></meta>
      </Head>
      <PageWrapper
        themeConfig={{
          headerClassName:
            "site-header--menu-right dark-mode-texts bg-default-1",
          footerStyle: "style3",
        }}>
        <CurriculumPage
          filePath='../../curriculum/ai/AIEthics.md'
          title='AI Ethics'
          description='Understanding the ethical principles underlying Artificial Intelligence systems'
        />
      </PageWrapper>
    </>
  );
};
export default PricingPage;
