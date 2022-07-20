import React from 'react'
import { AppProps } from 'next/app'
import { GlobalStyles } from '../styles/global'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <title>Volatus</title>
      <Component {...pageProps} />
      <GlobalStyles />
    </>
  )
}

export default MyApp
