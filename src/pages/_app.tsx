import React from 'react'
import { AppProps } from 'next/app'
import { GlobalStyles } from '../styles/global'
import { DataProvider } from '../context/DataContext'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <DataProvider>
      <title>Volatus</title>
      <Component {...pageProps} />
      <GlobalStyles />
    </DataProvider>
  )
}

export default MyApp
