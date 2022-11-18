import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { createClient } from "next-sanity";
import { BLOCKED_PAGES } from 'next/dist/shared/lib/constants';
import PortableText from "react-portable-text"


export default function Home({blockContent}: any) {
  console.log(blockContent[0])
  return (
    <div className="home">
      <h1>{blockContent[0].title}</h1>
      <div className="nav bg-gray-400 text-red-600">
        I am navbar
        
        <PortableText
      // Pass in block content straight from Sanity.io
        content={blockContent[0].content}
        projectId = "xkjbkqsz"
        dataset = "production"
      // Optionally override marks, decorators, blocks, etc. in a flat
      // structure without doing any gymnastics
      serializers={{
        h1: (props: any,) => <h1 style={{ color: "red" }} {...props} />,
        li: ({children}:any) => <li className="special-list-item">{children} </li>,
      }}
    />
      </div>
      <span> I am homepage </span>
    </div>
  )
}
const client = createClient({
    projectId: "xkjbkqsz",
    dataset: "production",
    useCdn: false

});

export async function getStaticProps() {
  const blogs = [
    {
      // _createdAt: "2022-03-08T09:28:00Z",
      // _id: "1f69c53d-418a-452f-849a-e92466bb9c75",
      // _rev: "xnBg0xhUDzo561jnWODd5e",
      // _type: "blogs",
      // _updatedAt: "2022-03-08T09:28:00Z",
      // name: "rohan"
    }
  ];
  const animals = await client.fetch(`*[_type == "blogs"]`);
  return {
    props: {
      blogs
    }
  };
}