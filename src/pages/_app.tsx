import '../styles/globals.css';

import { PrismicProvider } from '@prismicio/react';
import type { AppProps } from 'next/app';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Navigation } from '../components/mobile/Navigation';
import { prismicClient } from '../configs/prismic';
import { Seo } from '../seo';
import { useEffect } from 'react';

export default function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    document.body.scrollIntoView({
      behavior: 'smooth',
    });
  }, []);
  return (
    <PrismicProvider client={prismicClient}>
      <Seo />
      <Component {...pageProps} />
      <Navigation />
      <ToastContainer />
    </PrismicProvider>
  );
}
