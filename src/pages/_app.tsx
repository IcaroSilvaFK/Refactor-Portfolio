import "../styles/globals.css";

import { PrismicProvider } from "@prismicio/react";
import type { AppProps } from "next/app";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { ButtonUp } from "../components/ButtonMessage";
import { Navigation } from "../components/mobile/Navigation";
import { prismicClient } from "../configs/prismic";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <PrismicProvider client={prismicClient}>
      <Component {...pageProps} />
      <ButtonUp />
      <Navigation />
      <ToastContainer />
    </PrismicProvider>
  );
}
