// import '../styles/globals.css'
import { AppProps } from 'next/app'
import { GlobalStyle } from '@styles/global';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
          
}

export default MyApp
