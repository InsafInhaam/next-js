import '../styles/general.sass'
import '../styles/globals.css'

import type { AppProps } from 'next/app'
import MainLayout from './../src/components/layout/main-layout';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </>
  )
}