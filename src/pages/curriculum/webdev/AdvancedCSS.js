/** @format */

import React from "react";
import Head from "next/head";

import PageWrapper from "../../../components/PageWrapper";
import CurriculumPage from "../../../sections/curriculum/CurriculumPage";

const PricingPage = () => {
  return (
    <>
      <Head>
        <title>Advanced CSS Tutorial| App Dev League</title>
        <meta name='description' content='Learn some advanced CSS!'></meta>
        <meta
          property='og:description'
          content='Learn some advanced CSS!'></meta>
      </Head>
      <PageWrapper
        themeConfig={{
          headerClassName:
            "site-header--menu-right dark-mode-texts bg-default-1",
          footerStyle: "style3",
        }}>
        <CurriculumPage
          filePath='../../curriculum/webdev/AdvancedCSS.md'
          title='Advanced CSS'
          description='Learn about bootstrap and advanced CSS techniques!'
        />
      </PageWrapper>
    </>
  );
};
export default PricingPage;
