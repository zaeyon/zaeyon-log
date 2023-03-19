import styled from "styled-components";

import CommentItem from "./CommentItem";

const Container = styled.div`
  border-top: 4px solid #000748;
`;

const DividerContainer = styled.div`
  height: 2px;
  background-color: #00000010;
`;

const CommentList = ({
  commentArray,
  removeComment,
  writeReply,
  removeReply,
}) => {
  return (
    <Container>
      {commentArray.map((comment, index) => (
        <CommentItem
          key={comment.id}
          index={index}
          comment={comment}
          removeComment={removeComment}
          writeReply={writeReply}
          removeReply={removeReply}
        />
      ))}
    </Container>
  );
};

export default CommentList;
