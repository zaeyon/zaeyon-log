import { useState } from "react";
import Image from "next/image";
import style from "./styles/comment-item.module.css";
import {comment} from '../lib/type';


import RemoveIconPNG from "../../public/images/icons/remove.png";
import ReplyIconPNG from "../../public/images/icons/reply.png";
import CommentInput from "./CommentInput";

interface props {
  comment: comment,
  index: number,
  removeComment: (selectedIndex: number) => void,
  writeReply: (name: string, password: string, comment: string, commentId: string, selectedIndex: number) => void,
  removeReply: (commentIndex: number, replyIndex: number) => void,
}

const CommentItem:React.FC<props> = ({
  comment,
  index,
  removeComment,
  writeReply,
  removeReply,
}) => {
  const [visibleReplyWrite, setVisibleReplyWrite] = useState(false);

  const onClickRemoveComment = () => {
    const inputedPassword = prompt("비밀번호를 입력하세요.");
    if (inputedPassword === null) {
      return;
    } else if (inputedPassword?.toString() === comment.password?.toString()) {
      removeComment(index);
    } else {
      alert("비밀번호가 일치하지 않습니다.");
    }
  };

  const onClickRemoveReply = (replyIndex: number) => {
    const inputedPassword = prompt("비밀번호를 입력하세요.");
    if (inputedPassword === null) {
      return;
    } else if (
      inputedPassword?.toString() ===
      comment.replys[replyIndex].password?.toString()
    ) {
      removeReply(index, replyIndex);
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
      <div className={style.container}>
        <div className={style.contentWrapper}>
          <div className={style.nameWrapper}>{comment.name}</div>
          <div className={style.commentWrapper}>{comment.comment}</div>
          <span
            className={style.removeIconWrapper}
            onClick={() => onClickRemoveComment()}
          >
            <Image
              className={style.removeIconImage}
              src={RemoveIconPNG}
              alt={""}
            />
          </span>
        </div>
        <div className={style.footerContainer}>
          <span
            className={style.replyButton}
            onClick={() => onChangeVisibleReplyWrite()}
          >
            답글
          </span>
          <span className={style.dateWrapper}>
            {comment.date.replace("-", ".").replace("-", ".")}
          </span>
        </div>
        <div className={style.divider} />
      </div>
      {comment.replys.length > 0 && (
        <div className={style.replysContainer}>
          {comment.replys.map((item, replyIndex) => (
            <div className={style.replyWrapper} key={replyIndex}>
              <div className={style.contentWrapper}>
                <div className={style.nameWrapper}>{item.name}</div>
                <div className={style.commentWrapper}>{item.comment}</div>
                <span
                  className={style.removeIconWrapper}
                  onClick={() => onClickRemoveReply(replyIndex)}
                >
                  <Image
                    className={style.removeIconImage}
                    src={RemoveIconPNG}
                    alt={""}
                  />
                </span>
              </div>
              <div className={style.footerContainer}>
                <span className={style.dateWrapper}>
                  {comment.date.replace("-", ".").replace("-", ".")}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
      {visibleReplyWrite && (
        <div className={style.replyWriteWrapper}>
          <Image className={style.replyIconImage} src={ReplyIconPNG} alt={""} />
          <div className={style.replyInputWrapper}>
            <CommentInput
              type={"reply"}
              writeReply={writeReply}
              commentId={comment.id}
              selectedIndex={index}
              hideReplyWrite={hideReplyWrite}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default CommentItem;
