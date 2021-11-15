import Head from "next/head";
import "../styles/index.scss";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/favicon-32x32.png"
        />
        <title>Frontend Mentor | Sunnyside agency landing page</title>
        <meta name="viewport" content="width=device-width; initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
