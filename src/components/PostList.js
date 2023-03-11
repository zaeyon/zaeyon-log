import styled from "styled-components";
import PostItem from "./PostItem";

import { motion, useMotionValue, useTransform } from "framer-motion";

const Container = styled.div`
  margin-top: 15px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
`;

const EmptyPostItemContainer = styled.div`
  width: 13rem;
  height: 11rem;
  margin-bottom: 20px;
  border: 0.5px solid #f2f2f2;
  border-radius: 15px;
`;

const PostList = ({ postsData }) => {
  const x = useMotionValue(1000);
  return (
    <Container>
      <>
        {postsData.map((post, index) => (
          <motion.div
            whileHover={{ scale: 1.074 }}
            transition={{ type: "linear", duration: 0.22 }}
            key={index}
          >
            <PostItem post={post} key={index} />
          </motion.div>
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
