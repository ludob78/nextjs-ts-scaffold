import Head from 'next/head'
import { useEffect, useState } from 'react';
import Layout from '@components/Layout';
// import styles from '../styles/Home.module.css'

import { GlobalStyle } from '@styles/global';
const Home = ({items}) => {
  const [isConnected, setIsConnected] = useState(true);
  useEffect(()=>{
    console.log("isConnected",window.localStorage.getItem('isConnected'))
    // setIsConnected(window.localStorage.getItem('isConnected')|| false);
    console.log(window.localStorage);
  })
  return (
    
    <Layout /* className={styles.container} */>
      <div>
      <Head>
        <title>Welcome on Best Moments</title>
        <meta name="description" content="Remind you best moments" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
  
      <main /* className={styles.main} */>

{/*         <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p> */}
      </main>
      </div>
    </Layout>
  )
}

export default Home