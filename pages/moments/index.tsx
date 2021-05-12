import React from "react";
import { GetServerSideProps } from "next";
import Router from "next/router";
import CardMoment from "@components/Card";
import styled from "styled-components";
import Pagination from "@material-ui/lab/Pagination";
import Typography from "@material-ui/core/Typography";
import Head from "next/head";
import Layout from "@components/Layout";
import Drawer from '@components/Drawer';
interface Moment {
  title?: string;
  content?: string;
  likes?: number;
  tags?: Array<string>;
  publishedDate?: string;
}

export const getServerSideProps: GetServerSideProps = async ({
  query: { page = 1 },
}) => {
  const limit = 30;
  try {
    const resCount = await fetch(`https://jsonplaceholder.typicode.com/todos`);
    const momentsCounts = await resCount.json();

    const res = await fetch(
      `https://jsonplaceholder.typicode.com/todos?_page=${page}&_limit=${limit}`
    );
    const moments = await res.json();
      console.log("data",moments)
    if (!moments) {
      return {
        notFound: true,
      };
    }
    return {
      props: {
        items: moments,
        page,
        countPage: Math.round(momentsCounts.length / limit),
      },
    };
  } catch (error) {
    throw new Error(`Error on fetch moment:${error}`);
  }
};

interface Props {
  items: Array<any>;
  page: string;
  countPage: number;
}

const List = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 0;
`;

const ListItem = styled.li`
  margin: 20px;
  max-width: 400px;
`;
const PaginationWrapper = styled.div`
  text-align: center;
  & ul {
    justify-content: center;
    & button {
      color: #fff;
    }
  }
`;
const Moments = ({ items, page, countPage }: Props) => {
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    Router.push(`/moments/?page=${value}`);
  };

  return (
    <Layout>
      <div>
        <Head>
          <title>List of Best Moments</title>
          <meta
            name="description"
            content="Let's review the best moments of your life"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Drawer></Drawer>
        <main>
          <List>
            {items.map((item, index) => (
              <ListItem key={index} className={"item-moment"}>
                <a href={`/moments/${item.id}`}>
                  <CardMoment index={index} {...item} />
                </a>
              </ListItem>
            ))}
          </List>
          <PaginationWrapper>
            <Typography>Page: {page}</Typography>
            <Pagination
              page={parseInt(page, 10)}
              count={countPage}
              onChange={handleChange}
            />
          </PaginationWrapper>
        </main>
      </div>
    </Layout>
  );
};

export default Moments;
