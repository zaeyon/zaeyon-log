import { useCallback } from "react";
import styled from "styled-components";
import style from "./styles/post-list.module.css";
import PostItem from "./PostItem";

import { motion, useMotionValue, useTransform } from "framer-motion";

const MotionDiv = styled(motion.div)`
  @media (min-width: 470px) {
    margin-left: ${(props) => (props.index % 3 !== 0 ? "1rem" : "0")};
  }

  @media (min-width: 470px) and (max-width: 900px) {
    margin-left: ${(props) => (props.index % 2 !== 0 ? "1rem" : "0")};
  }
`;

const PostList = ({ postsData, isMobile }) => {
  return (
    <div className={style.container}>
      <div className={style.postListWrapper}>
        {postsData.map((post, index) => (
          <MotionDiv
            index={index}
            initial={false}
            whileHover={isMobile ? "" : { scale: 1.074 }}
            transition={isMobile ? "" : { type: "linear", duration: 0.22 }}
            key={index}
          >
            <PostItem post={post} key={index} />
          </MotionDiv>
        ))}
        {postsData.length % 3 === 2 ? (
          <div className={style.emptyPostItemWrapper} />
        ) : postsData.length % 3 === 1 ? (
          <>
            <div className={style.emptyPostItemWrapper} />
            <div className={style.emptyPostItemWrapper} />
          </>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default PostList;
