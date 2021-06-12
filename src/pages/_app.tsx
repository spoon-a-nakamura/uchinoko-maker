import 'ress';
import { NextPage } from 'next';
import { AppProps } from 'next/app';
import { css, Global } from '@emotion/react';
import { fontFace } from '../styles/fonts';
// import { fontFamilies } from '../styles/fonts';
import React, { useEffect } from 'react';
import Head from 'next/head';
import Header from '../components/app/Header';
import Footer from '../components/app/Footer';
import { colors, useCustomVhProperty } from '../styles/utils';
import { adobeLoader } from '../utils/adobeLoader';

const baseUrl = '';
const siteTitle = '';
const siteDescription = '';
const twitterSite = '';
const author = '';
const themeColor = '';
const GtagId = '';

const App: NextPage<AppProps> = ({ Component, pageProps }) => {
  useEffect(() => {
    if (process.browser) adobeLoader(document);
  }, []);
  useCustomVhProperty();

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="content-language" content="ja" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content={themeColor} />
        <meta name="robots" content="index,follow" />
        <meta name="author" content={author} />
        <title>{siteTitle}</title>
        <meta name="description" content={siteTitle} />
        <link rel="canonical" href={baseUrl} />
        <link
          rel="shortcut icon"
          href="/assets/images/meta/favicon.png"
          type="image/png"
        />
        <link
          rel="apple-touch-icon"
          href="/assets/images/meta/app-touch-icon.png"
        />
        <meta property="og:site_name" content={siteTitle} />
        <meta property="og:title" content={siteTitle} />
        <meta
          property="og:image"
          content={`${baseUrl}/assets/images/meta/ogimg.png`}
        />
        <meta property="og:description" content={siteDescription} />
        <meta property="og:url" content={baseUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="ja_JP" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content={twitterSite} />
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=G-${GtagId}`}
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-${GtagId}');`,
          }}
        ></script>
      </Head>
      <Global styles={globalStyle} />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
};
export default App;

const globalStyle = css`
  ${fontFace};

  html,
  body {
    font-size: 16px;
    color: ${colors.textBlack};
    background: ${colors.backGroundWhite};
    text-size-adjust: 100%;
    font-family: ab-kokoro-no2, -apple-system, BlinkMacSystemFont, 'Segoe UI',
      'Hiragino Sans', 'Hiragino Kaku Gothic ProN', Meiryo, sans-serif;
    font-weight: 400;
    font-style: normal;
  }

  #__next {
  }

  ul,
  ol,
  li {
    list-style: none;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  svg:not([fill]) {
    fill: currentColor;
  }

  input,
  textarea {
    font: inherit;
    color: inherit;
    border-radius: 0;
    box-shadow: none;
    appearance: none;
  }
`;
