import React from "react";
import Head from "next/head";

import PageWrapper from "../components/PageWrapper";
import Hero from "../sections/events/Hero";
import EventList from "../sections/events/EventList";

const PricingPage = () => {
  return (
    <>
      <Head>
        <title>Events | App Dev League</title>
        <meta name="description" content="See all the upcoming events ADL will host, and the past events hosted by ADL!"></meta>
        <meta property="og:description" content="See all the upcoming events ADL will host, and the past events hosted by ADL!"></meta>
      </Head>
      <PageWrapper
        themeConfig={{
          headerClassName: "site-header--menu-right dark-mode-texts bg-default-1",
          footerStyle: "style3"
        }}
      >
        <Hero />
        <EventList />
      </PageWrapper>
    </>
  );
};
export default PricingPage;
