import Link from "next/link";
import CategoryItem from "./CategoryItem";
import style from "./styles/category-list.module.css";


interface categoryObj {
  key: string,
  text: string
  number: number,
}

interface props {
  postsNumber: number,
  onClickCategoryItem: (category: categoryObj) => void,
}


const CategoryList:React.FC<props> = ({ postsNumber, onClickCategoryItem }) => {
  const Categories = [
    {
      key: "react",
      text: "React",
      number: 2,
    },
    {
      key: "javascript",
      text: "Jacscript",
      number: 2,
    },
  ];

  return (
    <div className={style.container}>
      <Link style={{ textDecoration: "none" }} href={"/about"}>
        <div className={style.aboutWrapper}>About</div>
      </Link>
      {Categories.map((category, index) => (
        <CategoryItem
          onClickCategoryItem={onClickCategoryItem}
          key={index}
          category={category}
          postsNumber={category.number}
        />
      ))}
    </div>
  );
};

export default CategoryList;
