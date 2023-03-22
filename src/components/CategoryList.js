import Link from "next/link";
import styled from "styled-components";
import CategoryItem from "./CategoryItem";

const Container = styled.div`
  flex: 1;
  padding-left: 15px;
  padding-right: 15px;
`;

const AboutContainer = styled.div`
  padding: 18px 10px 18px 10px;

  border-bottom: 2.5px solid #efefef;
  display: flex;
  align-items: center;
`;

const AboutText = styled.div`
  font-size: 19px;
  color: #595959;
  font-family: "Jost-Medium";
`;

const CategoryList = ({ postsNumber, onClickCategoryItem }) => {
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
    <Container>
      <Link style={{ textDecoration: "none" }} href={"/about"}>
        <AboutContainer>
          <AboutText>About</AboutText>
        </AboutContainer>
      </Link>
      {Categories.map((category, index) => (
        <CategoryItem
          onClickCategoryItem={onClickCategoryItem}
          key={index}
          category={category}
          onClickCategory={""}
          postsNumber={category.number}
        />
      ))}
    </Container>
  );
};

export default CategoryList;
