/** @format */

import React from "react";
import Head from "next/head";

import PageWrapper from "../../../components/PageWrapper";
import CurriculumPage from "../../../sections/curriculum/CurriculumPage";

const PricingPage = () => {
  return (
    <>
      <Head>
        <title>Random Number Generator Tutorial| App Dev League</title>
        <meta
          name='description'
          content='Learn how to make a random number generator using HTML and PHP!'></meta>
        <meta
          property='og:description'
          content='Learn how to make a random number generator using HTML and PHP!'></meta>
      </Head>
      <PageWrapper
        themeConfig={{
          headerClassName:
            "site-header--menu-right dark-mode-texts bg-default-1",
          footerStyle: "style3",
        }}>
        <CurriculumPage
          filePath='../../curriculum/webdev/RandomNumberGenerator.md'
          title='Random Number Generator'
          description='Make a random number generator using HTML and PHP'
        />
      </PageWrapper>
    </>
  );
};
export default PricingPage;
