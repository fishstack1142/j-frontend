import React, { useState } from 'react'
import { AppProps } from 'next/app'
import { useRouter } from 'next/router'

import Layout from '../components/SiteWrapper'
import AuthContextProvider from '../context/AuthContextProvider'

function App({ Component, pageProps }: AppProps) {
  const { pathname } = useRouter()

  const homePath = pathname === '/'
  const productsPath = pathname.includes('products')

  return (
    <AuthContextProvider>
      <Layout products={productsPath} home={homePath}>
        <Component {...pageProps} />
      </Layout>
    </AuthContextProvider>
  )
}

export default App
