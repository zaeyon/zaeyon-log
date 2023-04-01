import {useState, useLayoutEffect} from 'react'; 
import Head from "next/head";
import style from '../styles/posts-page.module.css';
import Layout from "../components/Layout";
import { getSortedPostsData } from "../lib/posts";
import { wrapper } from "../app/store";

import PostList from "../components/PostList";


export async function getStaticProps() {
  const allPostsData = getSortedPostsData();

  wrapper.getServerSideProps((store) => async () => {


    return {props: {}}
  });

  return {
    props: {
      allPostsData,
    },
  };
}

interface props {
  allPostsData: Array<any>
}

const Home:React.FC<props> = ({ allPostsData }) => {
  const [isMobile, setIsMobile] = useState(false);

  useLayoutEffect(() => {
    if (window.innerWidth < 470) {
      setIsMobile(true);
    }
  }, []);
  return (
    <Layout
    isMobile={isMobile}>
      <Head>
        <title>ZAEYON LOG</title>
        <meta charSet="utf-8"></meta>
	      <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <meta http-equiv="X-UA-Compatible" content="IE=Edge"/>
        <meta name="description" content="프론트엔드 개발자의 개인 기술 블로그입니다."/>
        <meta
          name="google-site-verification"
          content="b_KRmmtmVWZrBzyGVuuTudU1A7831kRb8c26TbIJnTw"
        />
      </Head>
      <div
      className={style.container}>
        <div
        className={style.titleWrapper}>
          <span
          className={style.emoji}>🏠</span>
          Home
        </div>
        <PostList 
        isMobile={isMobile}
        postsData={allPostsData} />
      </div>
    </Layout>
  );
}

export default Home;
