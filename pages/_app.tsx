import React from "react"
import { AppProps } from "next/app"
import Head from "next/head"

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width,initial-scale=1.0,shrink-to-fit=no" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
