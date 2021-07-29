import React from "react";

import PageWrapper from "../components/PageWrapper";
import Hero from "../sections/about/Hero";
import Officers from "../sections/about/Officers";
import Stats from "../sections/about/Stats";
import OurCEO from "../sections/about/OurCEO";
import Execs from "../sections/about/Execs";
import Directors from "../sections/about/Directors";

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
        <Directors className="py-9 py-lg-12" />
        <Officers />
        <Stats />
      </PageWrapper>
    </>
  );
};
export default PricingPage;
