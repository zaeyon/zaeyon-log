import styled from "styled-components";
import PostItem from "./PostItem";

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
  border: 0.5px solid white;
  border-radius: 15px;
`;

const PostList = ({ postsData }) => {
  return (
    <Container>
      <>
        {postsData.map((post, index) => (
          <PostItem post={post} key={index} />
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
