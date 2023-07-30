/** @format */

import React from "react";
import Head from "next/head";

import PageWrapper from "../../../components/PageWrapper";
import CurriculumPage from "../../../sections/curriculum/CurriculumPage";

const PricingPage = () => {
  return (
    <>
      <Head>
        <title>Introduction to Competitive Coding Pt. 2| App Dev League</title>
        <meta
          name='description'
          content='Learn how to solve adhoc problems on USACO!'></meta>
        <meta
          property='og:description'
          content='Learn how to solve adhoc problems on USACO!'></meta>
      </Head>
      <PageWrapper
        themeConfig={{
          headerClassName:
            "site-header--menu-right dark-mode-texts bg-default-1",
          footerStyle: "style3",
        }}>
        <CurriculumPage
          filePath='../../curriculum/usaco/IntroToUsaco2.md'
          title='Introduction to Competitive Coding, Part 2'
          description='Learn how to solve Adhoc problems on USACO!'
        />
      </PageWrapper>
    </>
  );
};
export default PricingPage;
