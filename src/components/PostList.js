import styled from "styled-components";
import PostItem from "./PostItem";

import { motion, useMotionValue, useTransform } from "framer-motion";

const Container = styled.div`
  margin-top: 15px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

const EmptyPostItemContainer = styled.div`
  width: 13.5rem;
  height: 16rem;
  margin-bottom: 20px;
  border: 0.5px solid #f2f2f2;
  border-radius: 15px;
`;

const MotionDiv = styled(motion.div)`
  margin-left: ${(props) => (props.index % 3 !== 0 ? "1rem" : "0")};
  @media (max-width: 50rem) {
    margin-left: ${(props) => (props.index % 2 !== 0 ? "1rem" : "0")};
  }
`;

const PostList = ({ postsData }) => {
  return (
    <Container>
      <>
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
      </>
    </Container>
  );
};

export default PostList;
