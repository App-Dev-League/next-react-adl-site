import React from "react";
import Head from "next/head";

import PageWrapper from "../../../components/PageWrapper";
import CurriculumPage from "../../../sections/curriculum/CurriculumPage";

const PricingPage = () => {
  return (
    <>
      <Head>
        <title>Machine Learning With Swift| App Dev League</title>
        <meta
          name='description'
          content='Learn How To Create A Dog vs Cat Classifier using Swift and CreateML!'></meta>
        <meta
          property='og:description'
          content='Learn How To Create A Dog vs Cat Classifier using Swift and CreateML!'></meta>
      </Head>
      <PageWrapper
        themeConfig={{
          headerClassName:
            "site-header--menu-right dark-mode-texts bg-default-1",
          footerStyle: "style3",
        }}>
        <CurriculumPage
          filePath='../../curriculum/ai/MLSwiftCreateML.md'
          title='Creating A Machine Learning Model using Swift and CreateML'
          description='Learn How To Create A Dog vs Cat Classifier'
        />
      </PageWrapper>
    </>
  );
};
export default PricingPage;
