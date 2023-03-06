import { useRouter } from "next/router";
import styled from "styled-components";
import { getPostData, getCategoryPostIds } from "../../lib/posts";

import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

import Layout from "../../components/Layout";
import PostDetail from "../../components/PostDetail";
import CommentList from "../../components/CommentList";

const firebaseConfig = {
  apiKey: "AIzaSyApcPm79FZTru071CEdbNs4vJwR6uFHTyw",
  authDomain: "zaeyon-log.firebaseapp.com",
  projectId: "zaeyon-log",
  storageBucket: "zaeyon-log.appspot.com",
  messagingSenderId: "514547022134",
  appId: "1:514547022134:web:a94007fb4e9b7f4ab65b97",
  measurementId: "G-6BE6MDX1HB",
  databaseURL: "https://zaeyon-log-default-rtdb.firebaseio.com/",
};

const app = initializeApp(firebaseConfig);
const database = getDatabase();

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 51rem;
  justify-content: center;
  @media (max-width: 53rem) {
    width: 95%;
    margin-left: 2.5%;
    margin-right: 2.5%;
  }
  background: white;
  border-radius: 7px;
  box-shadow: 0px 0px 30px 15px #25252508;
`;

const CommentsContainer = styled.div`
  padding: 30px 20px 50px 20px;
`;

const CommentHeaderContainer = styled.div`
  font-size: 19px;
  font-weight: 600;
  padding-bottom: 10px;
  color: #000748;
`;

export async function getStaticPaths() {
  const paths = getCategoryPostIds("javascript");
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = getPostData(params.id, "javascript");
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
        <CommentsContainer>
          <CommentHeaderContainer>댓글</CommentHeaderContainer>
          <CommentList />
        </CommentsContainer>
      </Container>
    </Layout>
  );
};

export default Post;
