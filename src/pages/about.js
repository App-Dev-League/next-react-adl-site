import React from "react";

import PageWrapper from "../components/PageWrapper";
import Hero from "../sections/about/Hero";
import Officers from "../sections/about/Officers";
import OurCEO from "../sections/about/OurCEO";
import Execs from "../sections/about/Execs";
import Directors from "../sections/about/Directors";
import Partners from "../sections/about/Partners";
import Sponsors from "../sections/about/Sponsors";

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
        <Partners className="bg-default-1 py-10 py-md-15 py-lg-18 "/>
        <Sponsors className="bg-default-2 py-10 py-md-15 py-lg-18 "/>
      </PageWrapper>
    </>
  );
};
export default PricingPage;
