import { NextSeo } from "next-seo";
import Head from "next/head";

export default function IndexPage({
  pageTitle = "Zyggo Distrikt",
  pageDescription = "We rise by lifting others.",
}: {
  pageTitle?: string;
  pageDescription?: string;
}) {
  return (
    <>
      <NextSeo
        title={pageTitle}
        description={pageDescription}
        canonical="https://www.canonical.ie/"
        openGraph={{
          url: "https://zyggodistrikt.com/",
          title: "NFTS FOR GOOD",
          description: "We rise by lifting others.",
          images: [
            {
              url: "https://www.zyggodistrikt.com/images/twitterimage.jpg",
              width: 2048,
              height: 1264,
              alt: "NFTS FOR GOOD",
              type: "image/jpeg",
            },
          ],
        }}
        twitter={{
          cardType: "summary_large_image",
          site: "@ZyggoDistrikt",
          handle: "@ZyggoDistrikt",
        }}
      />
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Varela+Round&display=swap"
          rel="stylesheet"
        />
      </Head>
    </>
    // <div>
    //   <Head>
    //     <title>Zyggo Distrikt</title>
    // <link rel="preconnect" href="https://fonts.googleapis.com" />
    // <link rel="preconnect" href="https://fonts.gstatic.com" />
    //     <meta name="description" content="We rise by lifting others." />
    //     <meta property="og:title" content="NFTS FOR GOOD" />
    //     <meta property="og:type" content="website" />
    //     <meta property="og:url" content="https://zyggodistrikt.com/" />
    //     <meta
    //       property="og:image"
    //       content="https://www.zyggodistrikt.com/images/twitterimage.jpg"
    //     />
    //     <meta property="og:description" content="We rise by lifting others." />
    //     <meta name="twitter:card" content="summary" />
    //     <meta name="twitter:site" content="@ZyggoDistrikt" />
    //     <meta name="twitter:creator" content="@ZyggoDistrikt" />
    //     <meta
    //       name="twitter:image"
    //       content="https://www.zyggodistrikt.com/images/twitterimage.jpg"
    //     />
    //     <meta name="twitter:description" content="We rise by lifting others." />
    // <link
    //   href="https://fonts.googleapis.com/css2?family=Varela+Round&display=swap"
    //   rel="stylesheet"
    // />
    //   </Head>
    // </div>
  );
}
