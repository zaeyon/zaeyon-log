import { useState, useLayoutEffect } from "react";
import Head from "next/head";
import Layout from "../../components/Layout";
import { getCategoryPostsData } from "../../lib/posts";
import Image from "next/image";
import style from "../../styles/posts-page.module.css";

import PostList from "../../components/PostList";

import javascriptLogo from "../../../public/images/javascript_logo.png";

export async function getStaticProps() {
  const categoryPostsData = getCategoryPostsData("javascript");

  return {
    props: {
      category: "javascript",
      categoryPostsData: categoryPostsData,
    },
  };
}

export default function Javascript({ category, categoryPostsData }) {
  const [isMobile, setIsMobile] = useState(false);

  useLayoutEffect(() => {
    if (window.innerWidth < 470) {
      setIsMobile(true);
    }
  }, []);

  return (
    <Layout isMobile={isMobile}>
      <Head>
        <title>Javascript</title>
      </Head>
      <div className={style.container}>
        <div className={style.titleWrapper}>
          <Image
            className={style.javascriptLogoImage}
            src={javascriptLogo}
            alt={""}
          />
          {"Javascript"}
        </div>
        <PostList isMobile={isMobile} postsData={categoryPostsData} />
      </div>
    </Layout>
  );
}
