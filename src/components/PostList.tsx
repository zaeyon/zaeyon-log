import style from "./styles/post-list.module.css";
import PostItem from "./PostItem";
import { motion } from "framer-motion";
import {postList} from '../lib/type';

interface props {
  postsData: postList[]
  isMobile: boolean 
}

const PostList: React.FC<props> = ({ postsData, isMobile }) => {
  return (
    <div className={style.container}>
      <div className={style.postListWrapper}>
        {postsData.map((post, index) => (
          <div className={style.postItemWrapper} key={index}>
            <motion.div
              initial={false}
              whileHover={isMobile ? "" : { scale: 1.074 }}
              transition={isMobile ? {type: ""} : { type: "linear", duration: 0.22 }}
            >
              <PostItem post={post} key={index} />
            </motion.div>
          </div>
        ))}
        
      </div>
    </div>
  );
};

export default PostList;


/*

        {postsData.length % 3 === 2 ? (
          <div className={style.emptyPostItemWrapper}>
          <div className={style.emptyPostItem} />
          </div>
        ) : postsData.length % 3 === 1 ? (
          <>
          <div className={style.emptyPostItemWrapper}>
            <div className={style.emptyPostItem} />
          </div>
          <div className={style.emptyPostItemWrapper}>
            <div className={style.emptyPostItem} />
          </div>
          </>
        ) : (
          ""
        )}
*/