import CategoryItem from "./CategoryItem";
import style from "./styles/category-list.module.css";

const MobileCategoryList = ({
  postsNumber,
  onClickCategoryItem,
  onClickAboutCategoryItem,
}) => {
  const Categories = [
    {
      key: "react",
      text: "React",
      number: 2,
    },
    {
      key: "javascript",
      text: "Jacscript",
      number: 1,
    },
  ];

  return (
    <div className={style.container}>
      <div
        className={style.aboutWrapper}
        onClick={() => onClickAboutCategoryItem()}
      >
        About
      </div>
      {Categories.map((category, index) => (
        <CategoryItem
          onClickCategoryItem={onClickCategoryItem}
          key={index}
          category={category}
          onClickCategory={""}
          postsNumber={category.number}
        />
      ))}
    </div>
  );
};

export default MobileCategoryList;
