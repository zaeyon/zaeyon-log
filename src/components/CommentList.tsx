import style from "./styles/comment-list.module.css";
import {comment} from '../lib/type';

import CommentItem from "./CommentItem";

interface props {
  commentArray: comment[],
  removeComment: (selectedIndex: number) => void
  writeReply: (name: string, password: string, comment: string, commentId: string, selectedIndex: number) => void,
  removeReply: (commentIndex: number, replyIndex: number) => void,
}

const CommentList:React.FC<props> = ({
  commentArray,
  removeComment,
  writeReply,
  removeReply,
}) => {
  return (
    <div className={style.container}>
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
    </div>
  );
};

export default CommentList;
