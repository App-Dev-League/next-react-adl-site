/** @format */

import React from "react";
import Head from "next/head";

import PageWrapper from "../components/PageWrapper";
import Hero from "../sections/curriculum/Hero";
import CurriculumList from "../sections/curriculum/CurriculumList";

const PricingPage = () => {
  return (
    <>
      <Head>
        <title>Curriculum | App Dev League</title>
        <meta name='description' content="Explore ADL's curriculum!"></meta>
        <meta
          property='og:description'
          content="Explore ADL's curriculum!"></meta>
      </Head>
      <PageWrapper
        themeConfig={{
          headerClassName:
            "site-header--menu-right dark-mode-texts bg-default-1",
          footerStyle: "style3",
        }}>
        <Hero />
        <CurriculumList />
      </PageWrapper>
    </>
  );
};
export default PricingPage;
