import Head from "next/head";

import Layout from "../components/Layout";
import styled from "styled-components";
import { getSortedPostsData, getPostsNumber } from "../lib/posts";
import { useDispatch, useSelector } from "react-redux";
import { wrapper } from "../app/store";
import { setPostsNumber } from "../features/postsNumberSlice";

import PostList from "../components/PostList";

const Container = styled.div`
  width: 45rem;
  padding-top: 5px;
  @media (max-width: 50rem) {
    width: 90%;
    margin-left: 5%;
    margin-right: 5%;
  }
`;

const Emoji = styled.span`
  font-size: 40px;
  margin-right: 15px;
`;

const TitleText = styled.div`
  display: flex;
  align-items: center;
  font-size: 35px;
  font-weight: 600;
  padding-left: 20px;
  font-family: "Jost-Medium";
  color: #000748;
`;

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  const postsNumber = getPostsNumber();

  wrapper.getServerSideProps((store) => async () => {
    store.dispatch(setPostsNumber(postsNumber));
  });

  console.log("getStaticProps postsNumber", postsNumber);
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout>
      <Head>
        <title>ZAEYON LOG</title>
        <meta
          name="google-site-verification"
          content="b_KRmmtmVWZrBzyGVuuTudU1A7831kRb8c26TbIJnTw"
        />
      </Head>
      <Container>
        <TitleText>
          <Emoji>🏠</Emoji>
          Home
        </TitleText>
        <PostList postsData={allPostsData} />
      </Container>
    </Layout>
  );
}
