import { useState, useRef, useCallback } from "react";

import style from './styles/comment-input.module.css';


interface props {
  type?: string,  
  writeComment: (name: string, password: string, comment: string) => void,
  writeReply: (name: string, password: string, comment: string, commentId: string, selectedIndex: number) => void,
  commentId: string,
  selectedIndex: number,
  hideReplyWrite: () => void,
}

const CommentInput:React.FC<props> = ({
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

  const nameInputRef = useRef<any>();

  const onChangeNameInput = useCallback(
    (e: any) => {
      setName(e.target.value);

      if (name.length > 0) {
        setRequestName(false);
      }
    },
    [name]
  );

  const onChangePasswordInput = useCallback(
    (e: any) => {
      setPassword(e.target.value);

      if (password.length > 0) {
        setRequestPassword(false);
      }
    },
    [password]
  );

  const onChangeContentInput = useCallback(
    (e: any) => {
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
    <div
    className={style.container}>
      <div
      className={style.writerInfoContainer}>
        <span>
          <input
          className={style.nameInput}
            ref={nameInputRef}
            placeholder="닉네임"
            onChange={onChangeNameInput}
            value={name}
          />
          <input
          className={style.passwordInput}
            placeholder="비밀번호"
            type="password"
            onChange={onChangePasswordInput}
            value={password}
          />
          {requestName && <span className={style.requestWrapper}>닉네임을 입력하세요!</span>}
          {requestPassword && <span className={style.requestWrapper}>비밀번호를 입력하세요!</span>}
          {requestComment && <span className={style.requestWrapper}>내용을 입력하세요!</span>}
        </span>
        <div
        className={style.postButton}
        onClick={() => onClickPostButton()}>
          {type === "comment"
            ? "댓글 작성"
            : type === "reply"
            ? "답글 작성"
            : "댓글 작성"}
        </div>
      </div>{" "}
      <textarea
      className={style.contentInput}
        placeholder="내용"
        rows={5}
        onChange={onChangeContentInput}
        value={comment}
      />
    </div>
  );
};

export default CommentInput;
