import styled from "styled-components";
import PostItem from "./PostItem";

import { motion, useMotionValue, useTransform } from "framer-motion";

const Container = styled.div`
  margin-top: 13px;
  display: flex;
  justify-content: center;
`;

const PostListContainer = styled.div`
  flex-wrap: wrap;
`;

const PostListInner = styled.div`
  display: flex;
  flex-wrap: wrap;

  @media (max-width: 500px) {
    background-color: gray;
    width: 90vw;
  }

  @media (min-width: 500px) and (max-width: 767px) {
    //모바일
    width: 28rem;
    background-color: red;
  }

  @media (min-width: 768px) and (max-width: 900px) {
    // 테블릿 세로
    width: 28rem;
    background-color: green;
  }

  @media (min-width: 900px) and (max-width: 1199px) {
    // 테블릿 가로
    background-color: blue;
  }

  @media (min-width: 1200px) {
    // 데스크탑 일반
    background-color: black;
  }
`;

const EmptyPostItemContainer = styled.div`
  width: 13.5rem;
  height: 16rem;
  margin-bottom: 20px;
  border: 0.5px solid #f2f2f2;
  border-radius: 15px;
`;

const MotionDiv = styled(motion.div)`
  @media (min-width: 500px) {
    margin-left: ${(props) => (props.index % 3 !== 0 ? "1rem" : "0")};
  }

  @media (min-width: 500px) and (max-width: 900px) {
    margin-left: ${(props) => (props.index % 2 !== 0 ? "1rem" : "0")};
  }
`;

const PostList = ({ postsData }) => {
  return (
    <Container>
      <PostListContainer>
        <PostListInner>
          {postsData.map((post, index) => (
            <MotionDiv
              index={index}
              initial={false}
              whileHover={{ scale: 1.074 }}
              transition={{ type: "linear", duration: 0.22 }}
              key={index}
            >
              <PostItem post={post} key={index} />
            </MotionDiv>
          ))}
          {postsData.length % 3 === 2 ? (
            <EmptyPostItemContainer />
          ) : postsData.length % 3 === 1 ? (
            <>
              <EmptyPostItemContainer />
              <EmptyPostItemContainer />
            </>
          ) : (
            ""
          )}
        </PostListInner>
      </PostListContainer>
    </Container>
  );
};

export default PostList;
