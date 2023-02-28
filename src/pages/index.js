import Layout from "../components/Layout";
import styled from "styled-components";
import { getSortedPostsData } from "../lib/posts";

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
`;

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout>
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
