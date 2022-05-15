import "../styles/globals.css";
import type { AppProps } from "next/app";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { ButtonUp } from "../components/ButtonMessage";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <ButtonUp />
      <ToastContainer />
    </>
  );
}

export default MyApp;
