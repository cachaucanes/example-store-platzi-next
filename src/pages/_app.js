import '@styles/globals.css';
import '@styles/global.css';
import Header from '@components/Header';
import Script from 'next/script';
import AppContext from '@context/AppContext';

import useInitialState from '@hooks/useInitialState';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  const initialState = useInitialState();

  return (
    <AppContext.Provider value={initialState}>
      {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
      <Script strategy='afterInteractive' async src='https://www.googletagmanager.com/gtag/js?id=G-9M7D0DXS0L' />

      <Script id='google-analytics' strategy='afterInteractive'>
        {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'G-9M7D0DXS0L');`}
      </Script>
      <Head>
        <title>Store</title>
      </Head>
      <Header />
      <Component {...pageProps} />
    </AppContext.Provider>
  );
}

export default MyApp;
