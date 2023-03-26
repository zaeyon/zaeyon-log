import { useState, useLayoutEffect } from "react";
import Head from "next/head";
import Layout from "../../components/Layout";
import { getCategoryPostsData } from "../../lib/posts";
import style from '../../styles/posts-page.module.css';
import Image from "next/image";
import {postList} from '../../lib/type';

import PostList from "../../components/PostList";

import reactLogo from "../../../public/images/react_logo.png";

export async function getStaticProps() {
  const categoryPostsData = getCategoryPostsData("react");

  return {
    props: {
      category: "react",
      categoryPostsData: categoryPostsData,
    },
  };
}

interface props {
  categoryPostsData: postList[]
}

const React: React.FC<props> = ({ categoryPostsData }) => {
  const [isMobile, setIsMobile] = useState(false);

  useLayoutEffect(() => {
    if (window.innerWidth < 470) {
      setIsMobile(true);
    }
  }, []);
  return (
    <Layout isMobile={isMobile}>
      <Head>
        <title>React</title>
      </Head>
      <div className={style.container}>
        <div className={style.titleWrapper}>
            <Image
            className={style.reactLogoImage}
            src={reactLogo} alt=""/>
            React
        </div>
        <PostList isMobile={isMobile} postsData={categoryPostsData} />
      </div>
    </Layout>
  );
}

export default React;
