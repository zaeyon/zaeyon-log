import { useState, useLayoutEffect } from "react";
import Head from "next/head";
import Layout from "../../components/Layout";
import { getCategoryPostsData } from "../../lib/posts";
import styled from "styled-components";
import Image from "next/image";
import {postList} from '../../lib/type';

import PostList from "../../components/PostList";

import reactLogo from "../../../public/images/react_logo.png";

const Container = styled.div`
  padding-top: 5px;
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
`;

const TitleText = styled.div`
  display: flex;
  align-items: center;
  font-size: 35px;
  font-weight: 500;
  font-family: "Jost-Medium";
  padding-left: 20px;
  color: #000748;
`;

const ReactLogo = styled(Image)`
  width: 2.6rem;
  height: 2.3rem;
  object-fit: cover;
  margin-right: 10px;
`;

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
      <Container>
        <TitleContainer>
          <TitleText>
            <ReactLogo src={reactLogo} alt=""/>
            React
          </TitleText>
        </TitleContainer>
        <PostList isMobile={isMobile} postsData={categoryPostsData} />
      </Container>
    </Layout>
  );
}

export default React;
