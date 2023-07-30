/** @format */

import React from "react";
import Head from "next/head";

import PageWrapper from "../../../components/PageWrapper";
import CurriculumPage from "../../../sections/curriculum/CurriculumPage";

const PricingPage = () => {
  return (
    <>
      <Head>
        <title>Node.js Tutorial| App Dev League</title>
        <meta
          name='description'
          content='Learn the basics of Node.js, a development tool that allows you to write JavaScript on many platforms!'></meta>
        <meta
          property='og:description'
          content='Learn the basics of Node.js, a development tool that allows you to write JavaScript on many platforms!'></meta>
      </Head>
      <PageWrapper
        themeConfig={{
          headerClassName:
            "site-header--menu-right dark-mode-texts bg-default-1",
          footerStyle: "style3",
        }}>
        <CurriculumPage
          filePath='../../curriculum/webdev/IntroToNode.md'
          title='Intro to Node'
          description='Learn the basics of Node.js, a development tool that allows you to write JavaScript on many platforms'
        />
      </PageWrapper>
    </>
  );
};
export default PricingPage;
