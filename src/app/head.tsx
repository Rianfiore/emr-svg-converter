/* eslint-disable @next/next/no-page-custom-font */
import Head from "next/head";

export default function HeadComponent() {
  return (
    <Head>
      <title>EMR SVG Converter</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta name="description" content="Conversor SVG feito pela EMR" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap"
        rel="stylesheet"
      />
    </Head>
  );
}
