import { getPostData, getCategoryPostIds } from "../../lib/posts";

import { initializeApp } from "firebase/app";
import {
  getFirestore,
  doc,
  setDoc,
  updateDoc,
  arrayUnion,
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
  const writeComment = (name, password, comment) => {
    const postRef = doc(db, "posts/", postData.title);
    updateDoc(postRef, {
      comments: arrayUnion({
        comment: comment,
        name: name,
        password: password,
      }),
    });
  };

  return (
    <Layout>
      <PostDetail postData={postData} />
    </Layout>
  );
};

export default Post;
