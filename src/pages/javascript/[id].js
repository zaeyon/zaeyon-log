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
  const [commentArray, setCommentArray] = useState([]);
  const postRef = doc(db, "posts/", postData.title);

  useEffect(() => {
    let postDocSnap;
    const getPostDoc = async () => {
      postDocSnap = await getDoc(postRef);
      if (postDocSnap.exists()) {
        console.log("postDocSnap.exist", postDocSnap.data());
      } else {
        console.log("no document");
      }
    };

    getPostDoc();
  }, [commentArray]);

  const writeComment = (name, password, comment) => {
    const commentItem = {
      name,
      password,
      comment,
    };
    if (commentArray.length === 0) {
      setDoc(postRef, {
        comments: [commentItem],
      });
      setCommentArray([commentItem]);
    } else if (commentArray.length > 0) {
      updateDoc(postRef, {
        comments: arrayUnion({
          comment: comment,
          name: name,
          password: password,
        }),
      });
      setCommentArray([...commentArray, commentItem]);
    }
  };

  return (
    <Layout>
      <PostDetail postData={postData} writeComment={writeComment} />
    </Layout>
  );
};

export default Post;
