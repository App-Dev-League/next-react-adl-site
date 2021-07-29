import React from "react";

import PageWrapper from "../components/PageWrapper";
import Hero from "../sections/about/Hero";
import Masonry from "../sections/about/Masonry";
import Content from "../sections/about/Content";
import Team from "../sections/about/Team";
import Stats from "../sections/about/Stats";
import OurCEO from "../sections/about/OurCEO";
import Execs from "../sections/about/Execs";

const PricingPage = () => {
  return (
    <>
      <PageWrapper
        themeConfig={{
          headerClassName: "site-header--menu-right dark-mode-texts",
          footerStyle: "style3"
        }}
      >
        <Hero />
        <OurCEO className="py-12 py-lg-25" />
        <Execs />
        <Team />
        <Stats />
      </PageWrapper>
    </>
  );
};
export default PricingPage;
