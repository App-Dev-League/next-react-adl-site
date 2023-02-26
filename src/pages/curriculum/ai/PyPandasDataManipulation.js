/** @format */

import React from "react";
import Head from "next/head";

import PageWrapper from "../../../components/PageWrapper";
import CurriculumPage from "../../../sections/curriculum/CurriculumPage";

const PricingPage = () => {
  return (
    <>
      <Head>
        <title>Data Manipulation with Python and Pandas| App Dev League</title>
        <meta
          name='description'
          content='Learn data manipulation in Python using Pandas!'></meta>
        <meta
          property='og:description'
          content='Learn data manipulation in Python using Pandas!'></meta>
      </Head>
      <PageWrapper
        themeConfig={{
          headerClassName:
            "site-header--menu-right dark-mode-texts bg-default-1",
          footerStyle: "style3",
        }}>
        <CurriculumPage
          filePath='../../curriculum/ai/PyPandasDataManipulation.md'
          title='Data Manipulation with Python and Pandas'
          description='Learn data manipulation in Python using Pandas!'
        />
      </PageWrapper>
    </>
  );
};
export default PricingPage;
