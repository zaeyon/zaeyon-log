import {comment} from '../lib/type';
import style from './styles/post-detail.module.css';

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
    <div
    className={style.container}>
      <div className={style.contentContainer}>
        <PostMarkdown postData={postData} />
      </div>
      <div
      className={style.footerContainer}>
        <div
        className={style.commentListContainer}>
          <div
          className={style.commentHeaderContainer}>
            댓글({commentCount ? commentCount : 0})
          </div>
          <CommentList
            commentArray={commentArray}
            removeComment={removeComment}
            writeReply={writeReply}
            removeReply={removeReply}
          />
        </div>
        <div
        className={style.commentInputWrapper}>
          <CommentInput writeComment={writeComment} type={"comment"} writeReply={function (name: string, password: string, comment: string, commentId: string, selectedIndex: number): void {
            throw new Error("Function not implemented.");
          } } commentId={""} selectedIndex={0} hideReplyWrite={function (): void {
            throw new Error("Function not implemented.");
          } } />
        </div>
      </div>
    </div>
  );
};

export default PostDetail;
