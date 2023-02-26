/** @format */

import React from "react";
import Head from "next/head";

import PageWrapper from "../../../components/PageWrapper";
import CurriculumPage from "../../../sections/curriculum/CurriculumPage";

const PricingPage = () => {
  return (
    <>
      <Head>
        <title>React Todo App Tutorial| App Dev League</title>
        <meta
          name='description'
          content='Learn how to make a todo application with React!'></meta>
        <meta
          property='og:description'
          content='Learn how to make a todo application with React!'></meta>
      </Head>
      <PageWrapper
        themeConfig={{
          headerClassName:
            "site-header--menu-right dark-mode-texts bg-default-1",
          footerStyle: "style3",
        }}>
        <CurriculumPage
          filePath='../../curriculum/webdev/ReactToDo.md'
          title='React Todo App'
          description='Make a todo application using React.js!'
        />
      </PageWrapper>
    </>
  );
};
export default PricingPage;
