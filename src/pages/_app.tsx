import '../styles/globals.css';

import { PrismicProvider } from '@prismicio/react';
import type { AppProps } from 'next/app';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Message from '../components/ButtonMessage';
import { Navigation } from '../components/mobile/Navigation';
import { prismicClient } from '../configs/prismic';
import { Seo } from '../seo';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <PrismicProvider client={prismicClient}>
      <Seo />
      <Component {...pageProps} />
      <Message />
      <Navigation />
      <ToastContainer />
    </PrismicProvider>
  );
}

