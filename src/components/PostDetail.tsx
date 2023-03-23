import styled from "styled-components";
import {comment} from '../lib/type';

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
import CommentInput from "./CommentInput";

import {post} from '../lib/type';

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
  width: 53rem;
  justify-content: center;
  @media (max-width: 55rem) {
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

interface props {
  postData: post,
  commentArray: comment[],
  writeComment: (name: string, password: string, comment: string) => void,
  removeComment: (selectedIndex: number) => void,
  writeReply: (name: string, password: string, comment: string, commentId: string, selectedIndex: number) => void,
  removeReply: (commentIndex: number, replyIndex: number) => void,
  commentCount: number,
}

const PostDetail: React.FC<props> = ({
  postData,
  writeComment,
  commentArray,
  removeComment,
  writeReply,
  removeReply,
  commentCount,
}) => {
  return (
    <FullContainer>
      <Container>
        <PostMarkdown postData={postData} />
      </Container>
      <FooterContainer>
        <CommentsContainer>
          <CommentHeaderContainer>
            댓글({commentCount ? commentCount : 0})
          </CommentHeaderContainer>
          <CommentList
            commentArray={commentArray}
            removeComment={removeComment}
            writeReply={writeReply}
            removeReply={removeReply}
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
