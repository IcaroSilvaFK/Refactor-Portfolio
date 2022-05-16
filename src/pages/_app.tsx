import "../styles/globals.css";

import type { AppProps } from "next/app";
import { ToastContainer } from "react-toastify";
import { PrismicProvider } from "@prismicio/react";

import "react-toastify/dist/ReactToastify.css";

import { ButtonUp } from "../components/ButtonMessage";
import { prismicClient } from "../configs/prismic";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <PrismicProvider client={prismicClient}>
      <Component {...pageProps} />
      <ButtonUp />
      <ToastContainer />
    </PrismicProvider>
  );
}

export default MyApp;
