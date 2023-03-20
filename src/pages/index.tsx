import Head from "next/head";

import Layout from "../components/Layout";
import styled from "styled-components";
import { getSortedPostsData, getPostsNumber } from "../lib/posts";
import { useDispatch, useSelector } from "react-redux";
import { wrapper } from "../app/store";
import { setPostsNumber } from "../features/postsNumberSlice";

import PostList from "../components/PostList";

const Container = styled.div`
  padding-top: 5px;
  @media (max-width: 53rem) {
    width: 95%;
    margin-left: 2.5%;
    margin-right: 2.5%;
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

    return {props: {}}
  });

  console.log("getStaticProps postsNumber", postsNumber);
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
  return (
    <Layout>
      <Head>
        <title>ZAEYON LOG</title>
        <meta
          name="google-site-verification"
          content="b_KRmmtmVWZrBzyGVuuTudU1A7831kRb8c26TbIJnTw"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
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

export default Home;
