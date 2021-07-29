import React from "react";

import PageWrapper from "../components/PageWrapper";
import Hero from "../sections/about/Hero";
import Masonry from "../sections/about/Masonry";
import Content from "../sections/about/Content";
import Team from "../sections/about/Team";
import Stats from "../sections/about/Stats";

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
        <Team />
        <Stats />
      </PageWrapper>
    </>
  );
};
export default PricingPage;
