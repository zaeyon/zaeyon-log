import { useState, useRef, useCallback } from "react";

import styled from "styled-components";
const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const NameInput = styled.input`
  width: 5rem;
  padding: 7px;
  font-size: 14.5px;
  border: 0.5px solid #25252530;
  background: #f2f2f250;
  border-radius: 5px;
  :focus {
    outline: 2px solid navy;
  }
`;

const PasswordInput = styled.input`
  width: 5rem;
  margin-left: 10px;
  padding: 7px;
  font-size: 14.5px;
  border: 0.5px solid #25252530;
  background: #f2f2f250;
  border-radius: 5px;
  :focus {
    outline: 2px solid navy;
  }
`;

const WriterInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const ContentInput = styled.textarea`
  margin-top: 10px;
  padding: 7px;
  height: 4rem;
  font-size: 14.5px;
  resize: none;
  border: 0.5px solid #25252530;
  background: #f2f2f250;
  border-radius: 5px;
  :focus {
    outline: 2px solid navy;
  }
`;

const RequestSpan = styled.span`
  margin-left: 12px;
  font-size: 14.5px;
  color: #e30000;
  font-weight: 600;
`;

const PostButton = styled.div`
  display: flex;
  align-items: center;
  opacity: 0.9;
  padding: 5px 12px 5px 12px;
  border-radius: 5px;
  background-color: #282d61;
  color: white;
  border: none;
  font-size: 14.5px;
  user-select: none;

  :hover {
    opacity: 0.6;
  }
`;

const CommentInput = ({
  writeComment,
  type,
  writeReply,
  commentId,
  selectedIndex,
  hideReplyWrite,
}) => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [comment, setComment] = useState("");

  const [requestName, setRequestName] = useState(false);
  const [requestPassword, setRequestPassword] = useState(false);
  const [requestComment, setRequestComment] = useState(false);

  const nameInputRef = useRef();

  const onChangeNameInput = useCallback(
    (e) => {
      setName(e.target.value);

      if (name.length > 0) {
        setRequestName(false);
      }
    },
    [name]
  );

  const onChangePasswordInput = useCallback(
    (e) => {
      setPassword(e.target.value);

      if (password.length > 0) {
        setRequestPassword(false);
      }
    },
    [password]
  );

  const onChangeContentInput = useCallback(
    (e) => {
      setComment(e.target.value);

      if (comment.length > 0) {
        setRequestComment(false);
      }
    },
    [comment]
  );

  const onClickPostButton = () => {
    if (name.length === 0) {
      setRequestName(true);
      setRequestPassword(false);
      setRequestComment(false);
    } else if (password.length === 0) {
      setRequestPassword(true);
      setRequestName(false);
      setRequestComment(false);
    } else if (comment.length === 0) {
      setRequestComment(true);
      setRequestPassword(false);
      setRequestName(false);
    } else {
      setName("");
      setPassword("");
      setComment("");
      setRequestName(false);
      setRequestPassword(false);
      setRequestComment(false);
      if (type === "comment") {
        writeComment(name, password, comment);
      } else if (type === "reply") {
        writeReply(name, password, comment, commentId, selectedIndex);
        hideReplyWrite();
      }
    }
  };

  const onClickNameInput = () => {
    nameInputRef.current.focus();
  };

  return (
    <Container>
      <WriterInfoContainer>
        <span>
          <NameInput
            ref={nameInputRef}
            placeholder="닉네임"
            onChange={onChangeNameInput}
            value={name}
          />
          <PasswordInput
            placeholder="비밀번호"
            type="password"
            onChange={onChangePasswordInput}
            value={password}
          />
          {requestName && <RequestSpan>닉네임을 입력하세요!</RequestSpan>}
          {requestPassword && <RequestSpan>비밀번호를 입력하세요!</RequestSpan>}
          {requestComment && <RequestSpan>내용을 입력하세요!</RequestSpan>}
        </span>
        <PostButton onClick={() => onClickPostButton()}>
          {type === "comment"
            ? "댓글 작성"
            : type === "reply"
            ? "답글 작성"
            : "댓글 작성"}
        </PostButton>
      </WriterInfoContainer>{" "}
      <ContentInput
        placeholder="내용"
        rows={5}
        onChange={onChangeContentInput}
        value={comment}
      />
    </Container>
  );
};

export default CommentInput;
