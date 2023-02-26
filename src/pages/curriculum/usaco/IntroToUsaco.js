/** @format */

import React from "react";
import Head from "next/head";

import PageWrapper from "../../../components/PageWrapper";
import CurriculumPage from "../../../sections/curriculum/CurriculumPage";

const PricingPage = () => {
  return (
    <>
      <Head>
        <title>Introduction to Competitive Coding| App Dev League</title>
        <meta
          name='description'
          content='Learn about the most advanced competitive coding competition!'></meta>
        <meta
          property='og:description'
          content='Learn about the most advanced competitive coding competition!'></meta>
      </Head>
      <PageWrapper
        themeConfig={{
          headerClassName:
            "site-header--menu-right dark-mode-texts bg-default-1",
          footerStyle: "style3",
        }}>
        <CurriculumPage
          filePath='../../curriculum/usaco/IntroToUsaco1.md'
          title='Introduction to Competitive Coding'
          description='Learn about the USA Computing Olympiad!'
        />
      </PageWrapper>
    </>
  );
};
export default PricingPage;
