import style from "./styles/comment-list.module.css";

import CommentItem from "./CommentItem";

const CommentList = ({
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
