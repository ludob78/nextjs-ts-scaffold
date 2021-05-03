import React from 'react'
import Item from './Item';
const items = [{title:"titre1",description:"desc1",tags:["#ÉTÉ","#maison","#nous"]}]

interface Moment {
    title: string,
    content: string,
    likes: number,
    tags: Array<string>
}

interface Props {
    items? : any,
}

const List = (props: Props):any => {
    // const { items } = props;
    return (
        <ul>
            {items.map((item,key) => <Item  key={`comment-${key}`}>{item.title}</Item>)}
        </ul>
    )
}

export default List
