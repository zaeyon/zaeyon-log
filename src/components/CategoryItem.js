import Link from "next/link";
import style from "./styles/category-item.module.css";

const CategoryItem = ({ category, onClickCategoryItem, postsNumber }) => {
  return (
    <div
      className={style.container}
      onClick={() => onClickCategoryItem(category)}
    >
      <div className={style.categoryWrapper}>
        {category.text}
        <div className={style.postsNumberText}> ({postsNumber})</div>
      </div>
    </div>
  );
};

export default CategoryItem;
