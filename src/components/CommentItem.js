import styled from "styled-components";
import Image from "next/image";
import RemoveIconPNG from "../../public/images/icons/remove.png";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 5.5rem;
`;

const ContentContainer = styled.div`
  flex: 1;
  padding: 0px 0px 10px 0px;
  display: flex;
  flex-direction: row;
`;

const NameContainer = styled.div`
  padding-top: 15px;
  width: 4rem;
  font-weight: 700;
  font-size: 16px;
`;

const DividerContainer = styled.div`
  height: 1px;
  background-color: #00000010;
`;

const CommentContainer = styled.div`
  padding-top: 15px;
  font-size: 16px;
  margin-left: 0px;
  flex: 1;
`;

const DateContainer = styled.div`
  font-size: 14px;
  color: #c9c9c9;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-bottom: 10px;
`;

const RemovewIcon = styled(Image)`
  padding-top: 15px;
  padding-left: 13px;
  padding-right: 3px;
  margin-left: 10px;
  width: 0.68rem;
  height: 0.73rem;
`;

const CommentItem = ({ comment, index }) => {
  return (
    <Container>
      <ContentContainer>
        <NameContainer>{comment.name}</NameContainer>
        <CommentContainer>{comment.comment}</CommentContainer>
        <RemovewIcon src={RemoveIconPNG} />
      </ContentContainer>
      <DateContainer>
        {comment.date.replace("-", ".").replace("-", ".")}
      </DateContainer>
      <DividerContainer />
    </Container>
  );
};

export default CommentItem;
