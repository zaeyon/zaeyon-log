import { useState, useEffect } from "react";
import { getPostData, getCategoryPostIds } from "../../lib/posts";

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
    ? "0" + parseInt(today.getMonth() + 1)
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

export async function getStaticProps({ params }) {
  const postData = getPostData(params.id, "react");
  return {
    props: {
      postData,
    },
  };
}

const Post = ({ postData }) => {
  const [commentArray, setCommentArray] = useState([]);
  const [visibleReplyWrite, setVisibleReplyWrite] = useState(false);
  const postRef = doc(db, "posts/", postData.title);

  useEffect(() => {
    let postDocSnap;
    const getPostDoc = async () => {
      postDocSnap = await getDoc(postRef);
      if (postDocSnap.exists()) {
        console.log("postDocSnap.data().comments", postDocSnap.data().comments);
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

  const writeComment = (name, password, comment) => {
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

  const writeReply = (name, password, comment, commentId, selectedIndex) => {
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

  const removeComment = (selectedIndex) => {
    console.log("removeComment selectedIndex", selectedIndex);
    const selectedComment = commentArray[selectedIndex];
    const removedCommentArray = commentArray.filter((item, index) => {
      return selectedIndex !== index;
    });

    setCommentArray(removedCommentArray);

    updateDoc(postRef, {
      comments: arrayRemove(selectedComment),
    });
  };

  return (
    <Layout>
      <PostDetail
        postData={postData}
        writeComment={writeComment}
        commentArray={commentArray}
        removeComment={removeComment}
        writeReply={writeReply}
      />
    </Layout>
  );
};

export default Post;
