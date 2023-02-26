/** @format */

import React from "react";
import Head from "next/head";

import PageWrapper from "../../../components/PageWrapper";
import CurriculumPage from "../../../sections/curriculum/CurriculumPage";

const PricingPage = () => {
  return (
    <>
      <Head>
        <title>Intro to Javascript| App Dev League</title>
        <meta
          name='description'
          content='Learn the basics of Javascript, the language that powers the web!'></meta>
        <meta
          property='og:description'
          content='Learn the basics of Javascript, the language that powers the web!'></meta>
      </Head>
      <PageWrapper
        themeConfig={{
          headerClassName:
            "site-header--menu-right dark-mode-texts bg-default-1",
          footerStyle: "style3",
        }}>
        <CurriculumPage
          filePath='../../curriculum/webdev/IntroToJS.md'
          title='Intro to JavaScript'
          description='Learn the basics of Javascript, the language that powers the web'
        />
      </PageWrapper>
    </>
  );
};
export default PricingPage;
