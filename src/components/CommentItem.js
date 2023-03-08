import { useState } from "react";
import styled from "styled-components";
import Image from "next/image";

import RemoveIconPNG from "../../public/images/icons/remove.png";
import ReplyIconPNG from "../../public/images/icons/reply.png";

import CommentInput from "../components/CommentInput";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 5.5rem;
`;

const ReplyContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 5.5rem;
  background-color: #f2f2f270;
  padding: 0 10px 0px 15px;
  border-bottom: 1px solid #00000010;
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
  font-size: 14.5px;
  word-break: break-all;
`;

const DividerContainer = styled.div`
  height: 1px;
  background-color: #00000010;
`;

const CommentContainer = styled.div`
  padding-top: 15px;
  font-size: 14.5px;
  margin-left: 15px;
  flex: 1;
  white-space: pre-wrap;
  word-break: break-all;
`;

const FooterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const DateSpan = styled.span`
  font-size: 14px;
  color: #b8b8b8;
  font-weight: 600;
  padding-bottom: 10px;
`;

const RemoveIcon = styled(Image)`
  width: 0.68rem;
  height: 0.73rem;
`;

const RemoveIconSpan = styled.span`
  margin-left: 10px;
  padding-top: 10px;
  padding-left: 0px;
  padding-right: 3px;
  height: 1.5rem;
  cursor: pointer;
`;

const ReplyButtonSpan = styled.span`
  margin-right: 7px;
  font-size: 13px;
  color: #b8b8b8;
  font-weight: 600;
  padding-bottom: 10px;
  cursor: pointer;
`;

const ReplyWriteContainer = styled.div`
  border-top: 1px solid #00000010;
  border-bottom: 1px solid #00000010;
  padding: 20px 0px 20px 0px;
  display: flex;
  flex-direction: row;
`;

const ReplyIcon = styled(Image)`
  width: 0.8rem;
  height: 0.8rem;
`;

const ReplyInputContainer = styled.div`
  flex: 1;
  margin-left: 10px;
`;

const ReplysContainer = styled.div``;

const CommentItem = ({ comment, index, removeComment, writeReply }) => {
  const [visibleReplyWrite, setVisibleReplyWrite] = useState(false);
  const onClickRemove = (index) => {
    const inputedPassword = prompt("비밀번호를 입력하세요.");
    if (inputedPassword === null) {
      return;
    } else if (inputedPassword?.toString() === comment.password?.toString()) {
      removeComment(index);
    } else {
      alert("비밀번호가 일치하지 않습니다.");
    }
  };

  const onChangeVisibleReplyWrite = () => {
    setVisibleReplyWrite(!visibleReplyWrite);
  };

  const hideReplyWrite = () => {
    setVisibleReplyWrite(false);
  };

  return (
    <>
      <Container>
        <ContentContainer>
          <NameContainer>{comment.name}</NameContainer>
          <CommentContainer>{comment.comment}</CommentContainer>
          <RemoveIconSpan onClick={() => onClickRemove(index)}>
            <RemoveIcon src={RemoveIconPNG} alt={""} />
          </RemoveIconSpan>
        </ContentContainer>
        <FooterContainer>
          <ReplyButtonSpan onClick={() => onChangeVisibleReplyWrite()}>
            답글
          </ReplyButtonSpan>
          <DateSpan>
            {comment.date.replace("-", ".").replace("-", ".")}
          </DateSpan>
        </FooterContainer>
        <DividerContainer />
      </Container>
      {comment.replys.length > 0 && (
        <ReplysContainer>
          {comment.replys.map((item, index) => (
            <ReplyContainer key={index}>
              <ContentContainer>
                <NameContainer>{item.name}</NameContainer>
                <CommentContainer>{item.comment}</CommentContainer>
                <RemoveIconSpan onClick={() => onClickRemove(index)}>
                  <RemoveIcon src={RemoveIconPNG} alt={""} />
                </RemoveIconSpan>
              </ContentContainer>
              <FooterContainer>
                <DateSpan>
                  {comment.date.replace("-", ".").replace("-", ".")}
                </DateSpan>
              </FooterContainer>
            </ReplyContainer>
          ))}
        </ReplysContainer>
      )}
      {visibleReplyWrite && (
        <ReplyWriteContainer>
          <ReplyIcon src={ReplyIconPNG} alt={""} />
          <ReplyInputContainer>
            <CommentInput
              type={"reply"}
              writeReply={writeReply}
              commentId={comment.id}
              selectedIndex={index}
              hideReplyWrite={hideReplyWrite}
            />
          </ReplyInputContainer>
        </ReplyWriteContainer>
      )}
    </>
  );
};

export default CommentItem;
