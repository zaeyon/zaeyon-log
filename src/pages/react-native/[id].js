import { useRouter } from "next/router";
import styled from "styled-components";
import { getPostData, getCategoryPostIds } from "../../lib/posts";

import Layout from "../../components/Layout";
import PostDetail from "../../components/PostDetail";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 45rem;
  justify-content: center;
  @media (max-width: 50rem) {
    width: 95%;
    margin-left: 2.5%;
    margin-right: 2.5%;
  }
`;

export async function getStaticPaths() {
  const paths = getCategoryPostIds("react-native");
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = getPostData(params.id, "react-native");
  return {
    props: {
      postData,
    },
  };
}

const Post = ({ postData }) => {
  return (
    <Layout>
      <Container>
        <PostDetail postData={postData} />
      </Container>
    </Layout>
  );
};

export default Post;