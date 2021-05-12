import React, { ReactElement } from 'react'
import { useRouter } from 'next/router'
import Head from "next/head";
import Layout from "@components/Layout";
import CardMoment from "@components/Card";

interface Props {
    index: string,
}

function Moment({}: Props): ReactElement {
    const router = useRouter()
    const { id } = router.query
    return (
        <Layout>
      <div>
        <Head>
          <title>Moment {id}</title>
          <meta
            name="description"
            content={`Best moment ${id}`}
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <CardMoment />
        </div>
        </Layout>
    )
}

export default Moment
