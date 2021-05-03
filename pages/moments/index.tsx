import React from "react";
import { GetStaticProps, GetServerSideProps } from 'next';
import CardMoment from '@/components/Card';
import styled from 'styled-components';
const mymoments = [{ title: "titre1", description: "desc1", tags: ["#ÉTÉ", "#maison", "#nous"], publishedDate: new Date() }]
interface Moment {
  title?: string,
  content?: string,
  likes?: number,
  tags?: Array<string>,
  publishedDate?: string
}


export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos");
    const moments = await res.json();
    if (!moments) {
      return {
        notFound: true,
      }
    }
    return {
      props: { items: moments }
    }
  } catch (error) {

  }
}

interface Props {
  items: Array<any>,
}

const List = styled.ul`
display: flex;
flex-direction: row;
flex-wrap: wrap;`

const ListItem = styled.li`
list-style-type: none;
margin: 20px;
max-width: 300px;
`

const Moments = ({items}: Props) => {


  return (
    <List>
      {items.map((item,index) => <ListItem key={index}><CardMoment /></ListItem>)}
    </List>
  );
};

export default Moments;
