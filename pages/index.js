import Layout from "../components/Layout";
import styled from "styled-components";
import { getSortedPostsData } from "../lib/posts";

const Container = styled.div`
  width: 46rem;
  height: 100rem;
  background-color: #ffffff;
`;

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  console.log("getStaticProps allPostsData", allPostsData);
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout>
      <Container />
    </Layout>
  );
}
