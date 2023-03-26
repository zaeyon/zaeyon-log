import Link from "next/link";
import style from "./styles/category-item.module.css";



interface categoryObj {
  key: string,
  text: string
  number: number,
}


interface props {
  category: categoryObj,
  onClickCategoryItem: (category: categoryObj) => void,
  postsNumber: number,
}

const CategoryItem: React.FC<props> = ({ category, onClickCategoryItem, postsNumber }) => {
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
