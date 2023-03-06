import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 5.5rem;
`;

const ContentContainer = styled.div`
  flex: 1;
  padding: 15px 0px 10px 0px;
  display: flex;
  flex-direction: row;
`;

const NameContainer = styled.div`
  width: 4rem;
  font-weight: 700;
  font-size: 16px;
`;

const DividerContainer = styled.div`
  height: 1px;
  background-color: #00000010;
`;

const CommentContainer = styled.div`
  font-size: 16px;
  margin-left: 0px;
  flex: 1;
`;

const DateContainer = styled.div`
  font-size: 14px;
  color: #00000040;
  font-weight: 600;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  padding-bottom: 10px;
`;

const CommentItem = ({ comment, index }) => {
  return (
    <Container>
      <ContentContainer>
        <NameContainer>{comment.name}</NameContainer>
        <CommentContainer>{comment.comment}</CommentContainer>
      </ContentContainer>
      <DateContainer>
        {comment.date.replace("-", ".").replace("-", ".")}
      </DateContainer>
      <DividerContainer />
    </Container>
  );
};

export default CommentItem;
