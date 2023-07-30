/** @format */

import React from "react";
import Head from "next/head";

import PageWrapper from "../../../components/PageWrapper";
import CurriculumPage from "../../../sections/curriculum/CurriculumPage";

const PricingPage = () => {
  return (
    <>
      <Head>
        <title>Natural Language Processing and BERT| App Dev League</title>
        <meta
          name='description'
          content='Learn about Natural Language Processing and the BERT model!'></meta>
        <meta
          property='og:description'
          content='Learn about Natural Language Processing and the BERT model!'></meta>
      </Head>
      <PageWrapper
        themeConfig={{
          headerClassName:
            "site-header--menu-right dark-mode-texts bg-default-1",
          footerStyle: "style3",
        }}>
        <CurriculumPage
          filePath='../../curriculum/ai/NLPBert.md'
          title='Natural Language Processing and the BERT Model'
          description='Learn how computers process human language'
        />
      </PageWrapper>
    </>
  );
};
export default PricingPage;
