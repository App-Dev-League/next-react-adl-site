import React from "react";
import Head from "next/head";

import PageWrapper from "../components/PageWrapper";
import Hero from "../sections/mentorship/Hero";
import Offerings from "../sections/mentorship/Offerings";
import Benefits from "../sections/mentorship/Benefits";

const PricingPage = () => {
  return (
    <>
      <Head>
        <title>Mentorship | App Dev League</title>
        <meta name="description" content="ADL Mentorship Program. More coming soon."></meta>
        <meta property="og:description" content="ADL Mentorship Program. More coming soon."></meta>
      </Head>
      <PageWrapper
        themeConfig={{
          headerClassName: "site-header--menu-right dark-mode-texts",
          footerStyle: "style3"
        }}
      >
        <Hero />
        <Benefits className="py-12 py-lg-25" />
        <Offerings />
      </PageWrapper>
    </>
  );
};
export default PricingPage;
