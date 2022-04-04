import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import Script from "next/script";
import { useEffect } from "react";
import * as gtag from "../lib/gtag";
import TagManager from "react-gtm-module";
import "../styles/globals.scss";

const MyApp = ({ Component, pageProps }: AppProps) => {
  // const router = useRouter();
  useEffect(() => {
    // const handleRouteChange = (url: any) => {
    //   gtag.pageview(url)
    // }
    // router.events.on('routeChangeComplete', handleRouteChange)
    // return () => {
    //   router.events.off('routeChangeComplete', handleRouteChange)
    // }
    TagManager.initialize({ gtmId: "GTM-WTH9H2M" });
  }, []);

  return (
    <>
      {/* Global Site Tag (gtag.js) - Google Analytics */}
      {/* <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtag.GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      /> */}
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
