import Script from 'next/script'
import Layout from '../components/layout'
import '../styles/globals.css'
import { Toaster } from 'react-hot-toast'

function MyApp({ Component, pageProps }) {
  return  <>
    <Script
    strategy="lazyOnload"
    src={`https://static.senja.io/dist/platform.js`}
  />
  <Layout>
    <Component {...pageProps} />
    <Toaster position='bottom-right' />
  </Layout>
  </>
}

export default MyApp
