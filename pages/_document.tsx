import Document, { Head, Html, Main, NextScript } from "next/document"
import * as React from "react"

export default class MyDocument extends Document {
  override render() {
    const trackers =
      process.env.INCLUDE_TRACKERS !== "0" ? (
        <>
          {/* Yandex Metrika */}
          <script dangerouslySetInnerHTML={{ __html: YM_SCRIPT }} />
          <noscript dangerouslySetInnerHTML={{ __html: YM_NOSCRIPT_HTML }} />

          {/* Google Analytics */}
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          />
          <script dangerouslySetInnerHTML={{ __html: GA_SCRIPT }} />
        </>
      ) : (
        <></>
      )

    return (
      <Html lang="ru">
        <Head>
          <meta charSet="utf-8" />

          {/* Theming */}
          <link
            rel="icon"
            type="image/svg+xml"
            href="/favicon.svg"
            sizes="any"
          />
          <link
            rel="icon"
            type="image/png"
            href="/favicon-32x32.png"
            sizes="32x32"
          />
          <link
            rel="icon"
            type="image/png"
            href="/favicon-16x16.png"
            sizes="16x16"
          />
          <link
            rel="icon"
            type="image/png"
            href="/favicon.png"
            sizes="512x512"
          />
          <link
            rel="apple-touch-icon"
            href="/apple-touch-icon.png"
            sizes="180x180"
          />
          <link
            rel="shortcut icon"
            href="/favicon.ico"
            sizes="48x48"
          />
          <meta name="theme-color" content="#007aff" />

          {/* Tracking */}
          {trackers}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

const GA_ID = `G-34R5QWP099`
const GA_SCRIPT = `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_ID}', {
  page_path: window.location.pathname,
});`

const YM_ID = `86600315`
const YM_SCRIPT = `(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

ym(${YM_ID}, "init", {
    clickmap:true,
    trackLinks:true,
    accurateTrackBounce:true,
    webvisor:true
});`
const YM_NOSCRIPT_HTML = `<div><img src="https://mc.yandex.ru/watch/${YM_ID}" style="position:absolute; left:-9999px;" alt="" /></div>`
