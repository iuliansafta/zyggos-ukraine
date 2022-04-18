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
        canonical="https://zyggodistrikt.com/"
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
  );
}
