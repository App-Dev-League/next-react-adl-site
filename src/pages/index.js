import React from "react";
import Head from "next/head";

import PageWrapper from "../components/PageWrapper";
import Hero from "../sections/home6/Hero";
import Content3 from "../sections/home2/Content3";
import Company from "../sections/home1/Compnay";
import Categories from "../sections/home1/Categories";
import Jobs from "../sections/home1/Jobs";
import Content1 from "../sections/home1/Content1";
import Blog from "../sections/home1/Blog";
// import Section from "../layout/Section";
import OurExperience from "../sections/home1/OurExperience";
import Stats from "../sections/about/Stats";

const IndexPage = () => {
  return (
    <>
      <Head>
        <title>Home | App Dev League</title>
        <meta name="description" content="App Dev League, a student-led non profit, is devoted to bringing computer science education to underrepresented students." />
        <meta property="og:description" content="App Dev League, a student-led non profit, is devoted to bringing computer science education to underrepresented students." />
      </Head>
      <PageWrapper
        themeConfig={{
          headerClassName: "site-header--menu-right"
        }}
      >
        <Hero className="position-relative pt-25 pt-md-31 pt-lg-35 pb-14 pb-md-19 pb-lg-33 position-relative overflow-hidden" />
        <Content3 className="bg-default-1 pt-12 pt-lg-25 pb-8 pb-lg-20" />
        <OurExperience className="py-12 py-lg-25" />
        <Stats />
        <Company className="bg-default-1 pt-13 pt-md-17 pt-lg-24 pb-13 pb-md-14 pb-lg-23" />
        <Categories className="bg-default-1 pt-lg-13 pb-md-7 pb-lg-11 position-relative" />
        <Jobs className="pt-14 pt-md-18 pt-lg-30 bg-default-2 pb-9 pb-md-13 pb-lg-29" />
        <Content1 className="pt-21 pt-md-24 pt-lg-32 pb-15 pb-md-19 pb-lg-30" />
        <Blog className="bg-default-1 pt-14 pt-md-18 pt-lg-27 pb-13 pb-md-17 pb-lg-26" />
      </PageWrapper>
    </>
  );
};
export default IndexPage;
