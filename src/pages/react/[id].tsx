import Head from "next/head";
import { useState, useEffect, useLayoutEffect } from "react";
import { getPostData, getCategoryPostIds } from "../../lib/posts";
import {comment, post} from '../../lib/type';

import { initializeApp } from "firebase/app";
import {
  getFirestore,
  doc,
  setDoc,
  updateDoc,
  arrayUnion,
  getDoc,
  deleteField,
  arrayRemove,
} from "firebase/firestore";

import Layout from "../../components/Layout";
import PostDetail from "../../components/PostDetail";

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

const today = new Date();
let year = today.getFullYear(); // 년도
let month =
  today.getMonth() + 1 < 10
    ? "0" + parseInt(`${today.getMonth() + 1}`)
    : today.getMonth() + 1;
let day = today.getDate() < 10 ? "0" + today.getDate() : today.getDate();
const date = year + "/" + month + "/" + day;

export async function getStaticPaths() {
  const paths = getCategoryPostIds("react");
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: any) {
  const postData = getPostData(params.id, "react");
  return {
    props: {
      postData,
    },
  };
}

interface props {
  postData: post
}

const Post: React.FC<props> = ({ postData }) => {
  const [commentArray, setCommentArray] = useState<comment[]>([]);
  const [commentCount, setCommentCount] = useState<number>(0);
  const postRef = doc(db, "posts/", postData.title);
  const [isMobile, setIsMobile] = useState(false);

  useLayoutEffect(() => {
    if (window.innerWidth < 470) {
      setIsMobile(true);
    }
  }, []);

  useEffect(() => {
    let postDocSnap;
    const getPostDoc = async () => {
      postDocSnap = await getDoc(postRef);
      if (postDocSnap.exists()) {
        if (postDocSnap.data().comments) {
          setCommentArray(postDocSnap.data().comments);
        } else {
          setCommentArray([]);
        }
      } else {
        console.log("no document");
      }
    };

    getPostDoc();
  }, []);

  useEffect(() => {
    let replyCount = 0;
    commentArray.forEach((item) => {
      replyCount = replyCount + item.replys.length;
    });

    setCommentCount(commentArray.length + replyCount);
  }, [commentArray]);

  const writeComment = (name: string, password: string, comment: string) => {
    const commentItem = {
      id: name + today.getMilliseconds(),
      name,
      password,
      comment,
      postId: postData.id,
      date,
      replys: [],
    };
    if (commentArray.length === 0) {
      setDoc(postRef, {
        comments: [commentItem],
      });
      setCommentArray([commentItem]);
    } else if (commentArray.length > 0) {
      updateDoc(postRef, {
        comments: arrayUnion(commentItem),
      });
      setCommentArray([...commentArray, commentItem]);
    }
  };

  const writeReply = (name: string, password: string, comment: string, commentId: string, selectedIndex: number) => {
    const replyItem = {
      id: name + today.getMilliseconds(),
      name,
      password,
      comment,
      postId: postData.id,
      date,
      commentId: commentId,
    };

    const tmpCommentArray = [...commentArray];
    tmpCommentArray[selectedIndex].replys.push(replyItem);

    setCommentArray(tmpCommentArray);
    updateDoc(postRef, {
      comments: tmpCommentArray,
    });
  };

  const removeComment = (selectedIndex: number) => {
    const selectedComment = commentArray[selectedIndex];
    const removedCommentArray = commentArray.filter((item, index) => {
      return selectedIndex !== index;
    });

    setCommentArray(removedCommentArray);

    updateDoc(postRef, {
      comments: arrayRemove(selectedComment),
    });
  };


  const removeReply = (commentIndex: number, replyIndex: number) => {
    const removedReplyArray = commentArray[commentIndex].replys.filter(
      (item, index) => {
        return index !== replyIndex;
      }
    );

    console.log("removeReply removedReplyArray", removedReplyArray);

    const tmpCommentArray = [...commentArray];
    tmpCommentArray[commentIndex].replys = removedReplyArray;

    setCommentArray(tmpCommentArray);
    updateDoc(postRef, {
      comments: tmpCommentArray,
    });
  };

  return (
    <Layout isMobile={isMobile} postTitle={postData.title}>
      <Head>
        <title>{postData.title}</title>
        <meta charSet="utf-8"/>
	      <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <meta http-equiv="X-UA-Compatible" content="IE=Edge"/>
        <meta name="description" content={postData.description}/>
      </Head>
      <PostDetail
        postData={postData}
        writeComment={writeComment}
        commentArray={commentArray}
        removeComment={removeComment}
        writeReply={writeReply}
        removeReply={removeReply}
        commentCount={commentCount}
      />
    </Layout>
  );
};

export default Post;
