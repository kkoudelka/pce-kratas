import "animate.css";
import "../styles/globals.scss";
import type { AppProps } from "next/app";
import Head from "next/head";
import Cookies from "../components/cookies/cookies";
import Script from "next/script";
import { useEffect } from "react";

const MyApp = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    print();
  }, []);

  const print = () => {
    const a =
      "            .''\n  ._.-.___.' (`\\\n //(        ( `'\n'/ )\\ ).__. ) \n' <' `\\ ._/'\\\n   `   \\     \\";

    // console log red 18px
    console.log("%c" + a, "color: #de091c; font-size: 18px;");
  };

  return (
    <>
      <Head>
        <title>Pardubický Kraťas</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Favicon */}
        <link rel="icon" href="/ajkn.png" />

        {/* Icons */}
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.15.2/css/all.css"
        />

        {/* Bootstrap 5 */}
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
          crossOrigin="anonymous"
        />

        {/* <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
          crossOrigin="anonymous"
          defer
        ></script> */}
      </Head>
      <>
        <Cookies />

        <Component {...pageProps} />
      </>
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
        crossOrigin="anonymous"
        strategy="afterInteractive"
        defer
      />
    </>
  );
};

export default MyApp;
