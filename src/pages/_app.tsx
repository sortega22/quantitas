import type { AppProps } from 'next/app';
import React, { useEffect } from 'react';
import '../styles/global.scss';
import '../styles/global-timeline.css';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    document.body.className = pageProps.body;
  });
  return <Component {...pageProps} />
}

export default MyApp
