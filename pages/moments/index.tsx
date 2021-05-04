import React from "react";
import { GetStaticProps, GetServerSideProps } from 'next';
import Link from 'next/link'
import Router from 'next/router'
import CardMoment from '@components/Card';
import styled from 'styled-components';
import Pagination from '@material-ui/lab/Pagination';
import Typography from '@material-ui/core/Typography';
import Head from 'next/head'
interface Moment {
  title?: string,
  content?: string,
  likes?: number,
  tags?: Array<string>,
  publishedDate?: string
}


export const getServerSideProps: GetServerSideProps = async ({ query: { page = 1 } }) => {
  const limit = 30;
  try {
    
    const resCount = await fetch(`https://jsonplaceholder.typicode.com/todos`);
    const momentsCounts = await resCount.json();

    const res = await fetch(`https://jsonplaceholder.typicode.com/todos?_page=${page}&_limit=${limit}`);
    const moments = await res.json();

    if (!moments) {
      return {
        notFound: true,
      }
    }
    return {
      props: { items: moments, page ,countPage:Math.round(momentsCounts.length/limit)},

    }
  } catch (error) {
    throw new Error(`Error on fetch moment:${error}`);
    
  }
}

interface Props {
  items: Array<any>,
  page: string,
  countPage: number
}

const List = styled.ul`
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: space-around;
`

const ListItem = styled.li`
list-style-type: none;
margin: 20px;
max-width: 400px;
`
const PaginationWrapper = styled.div`
text-align:center;
& ul{justify-content:center;}
`
const Moments = ({ items, page, countPage }: Props) => {
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    Router.push(`/moments/?page=${value}`)
  };

  return (
    <div>
      <Head>
        <title>List of Best Moments</title>
        <meta name="description" content="Let's review the best moments of your life" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <List>
        {items.map((item, index) => <ListItem key={index}><CardMoment index={index} {...item} /></ListItem>)}
      </List>
      <PaginationWrapper>
        <Typography>Page: {page}</Typography>
        <Pagination
          page={parseInt(page,10)}
          count={countPage}
          onChange={handleChange}
        />
      </PaginationWrapper>
    </div>
  );
};

export default Moments;
