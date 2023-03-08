import { useRouter } from "next/router";
import styled from "styled-components";

import { initializeApp } from "firebase/app";
import {
  getFirestore,
  doc,
  setDoc,
  updateDoc,
  arrayUnion,
  getDoc,
} from "firebase/firestore";

import Layout from "./Layout";
import PostMarkdown from "./PostMarkdown";
import CommentList from "./CommentList";
import CommentInput from "./CommentInput.js";

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
const db = getFirestore(app);

const FullContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 51rem;
  justify-content: center;
  @media (max-width: 53rem) {
    width: 95%;
    margin-left: 2.5%;
    margin-right: 2.5%;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: white;
  border-radius: 7px;
  box-shadow: 0px 0px 30px 15px #25252508;
`;

const CommentsContainer = styled.div``;

const CommentHeaderContainer = styled.div`
  font-size: 19px;
  font-weight: 600;
  padding-bottom: 10px;
  color: #000748;
`;

const FooterContainer = styled.div`
  margin-top: 15px;
  padding: 20px 20px 30px 20px;
  background-color: white;
  border-radius: 7px;
  box-shadow: 0px 0px 30px 15px #25252508;
`;

const CommentInputContainer = styled.div`
  margin-top: 20px;
`;

const PostDetail = ({
  postData,
  writeComment,
  commentArray,
  removeComment,
  writeReply,
}) => {
  return (
    <FullContainer>
      <Container>
        <PostMarkdown postData={postData} />
      </Container>
      <FooterContainer>
        <CommentsContainer>
          <CommentHeaderContainer>
            댓글({commentArray?.length})
          </CommentHeaderContainer>
          <CommentList
            commentArray={commentArray}
            removeComment={removeComment}
            writeReply={writeReply}
          />
        </CommentsContainer>
        <CommentInputContainer>
          <CommentInput writeComment={writeComment} type={"comment"} />
        </CommentInputContainer>
      </FooterContainer>
    </FullContainer>
  );
};

export default PostDetail;
