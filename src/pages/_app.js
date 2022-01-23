// import App from 'next/app'
import Layout from "../components/Layout";
import { GlobalProvider } from "../context/GlobalContext";
import { useEffect } from "react";

import "../../node_modules/slick-carousel/slick/slick.css";
import "../../node_modules/aos/dist/aos.css";

import "../../public/fonts/icon-font/css/style.css";
import "../../public/fonts/typography-font/typo.css";
import "../../public/fonts/fontawesome-5/css/all.css";
import "../../public/fonts/icon-font/css/style.css";
import "../assets/scss/bootstrap.scss";
import "../assets/scss/main.scss";
import 'reactjs-popup/dist/index.css';

const MyApp = ({ Component, pageProps, router }) => {
  const handleRouteChange = (url) => {
    window.gtag('config', '[Tracking ID]', {
      page_path: url,
    });
  };

  useEffect(() => {
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  if (router.pathname.match(/sign|reset|coming/)) {
    return (
      <GlobalProvider>
        <Layout pageContext={{ layout: "mini" }}>
          <Component {...pageProps} />
        </Layout>
      </GlobalProvider>
    );
  }

  return (
    <GlobalProvider>
      <Layout pageContext={{}}>
        <Component {...pageProps} />
      </Layout>
    </GlobalProvider>
  );
};

export default MyApp;
