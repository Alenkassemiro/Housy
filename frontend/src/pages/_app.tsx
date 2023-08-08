import type { AppProps } from 'next/app';

import '@/styles/globals.scss';
import { Toaster } from 'react-hot-toast';
import Header from '@/components/Header';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Toaster />
    </>
  );
}
