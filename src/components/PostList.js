import style from "./styles/post-list.module.css";
import PostItem from "./PostItem";

import { motion } from "framer-motion";

const PostList = ({ postsData, isMobile }) => {
  return (
    <div className={style.container}>
      <div className={style.postListWrapper}>
        {postsData.map((post, index) => (
          <div className={style.postItemWrapper} key={index}>
            <motion.div
              index={index}
              initial={false}
              whileHover={isMobile ? "" : { scale: 1.074 }}
              transition={isMobile ? "" : { type: "linear", duration: 0.22 }}
            >
              <PostItem post={post} key={index} />
            </motion.div>
          </div>
        ))}
        {postsData.length % 3 === 2 ? (
          <div className={style.emptyPostItemWrapper} />
        ) : postsData.length % 3 === 1 ? (
          <>
            <div className={style.emptyPostItemWrapper} />
            <div className={style.emptyPostItemWrapper} />
          </>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default PostList;
