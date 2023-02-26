import styled from "styled-components";
import CategoryItem from "./CategoryItem";

const Container = styled.div`
  flex: 1;
`;

const CategoryList = ({}) => {
  const Categories = [
    {
      key: "about",
      text: "About",
    },
    {
      key: "react",
      text: "React",
    },
    {
      key: "react-native",
      text: "React Native",
    },
    {
      key: "javascript",
      text: "Jacscript",
    },
  ];

  return (
    <Container>
      {Categories.map((category, index) => (
        <CategoryItem key={index} category={category} onClickCategory={""} />
      ))}
    </Container>
  );
};

export default CategoryList;
