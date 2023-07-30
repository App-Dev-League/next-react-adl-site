/** @format */

import React from "react";
import Head from "next/head";

import PageWrapper from "../../../components/PageWrapper";
import CurriculumPage from "../../../sections/curriculum/CurriculumPage";

const PricingPage = () => {
  return (
    <>
      <Head>
        <title>Basic Website Tutorial| App Dev League</title>
        <meta
          name='description'
          content='Learn how to make a basic website using HTML and CSS!'></meta>
        <meta
          property='og:description'
          content='Learn how to make a basic website using HTML and CSS!'></meta>
      </Head>
      <PageWrapper
        themeConfig={{
          headerClassName:
            "site-header--menu-right dark-mode-texts bg-default-1",
          footerStyle: "style3",
        }}>
        <CurriculumPage
          filePath='../../curriculum/webdev/BasicWebsite.md'
          title='Basic Website'
          description='Make your first basic website using HTML and CSS'
        />
      </PageWrapper>
    </>
  );
};
export default PricingPage;
