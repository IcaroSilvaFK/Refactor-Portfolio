import "../styles/globals.css";

import type { AppProps } from "next/app";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { PrismicProvider } from "@prismicio/react";

import { ButtonUp } from "../components/ButtonMessage";
import { prismicClient } from "../configs/prismic";
import { Navigation } from "../components/mobile/Navigation";

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
