import Image from "next/image";
import Link from "next/link";

const PostItem = ({ post }) => {
  console.log("PostListItem post", post);
  return (
    <Link
      onClick={(e) => e.stopPropagation()}
      style={{ textDecoration: "none" }}
      href={{
        pathname: `/${post.category}/${post.title}`,
      }}
    >
      <div className={style.container}>
        <div className={style.titleContainer}>{post.title}</div>
        <div className={style.contentWrapper}>
          <div className={style.previewWrapper}>{post.preview}</div>
          <div className={style.thumbnailImageWrapper}>
            <Image
              className={style.thumbnailImage}
              width={150}
              height={150}
              priority={true}
              src={post.thumbnail}
              alt={"thumbnail image"}
            />
            <div className={style.dateWrapper}>{post.date}</div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PostItem;
