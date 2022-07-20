import type { AppProps } from 'next/app';
import '../styles/global.scss';
import '../styles/global-timeline.css';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
