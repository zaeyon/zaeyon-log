import Link from "next/link";
import styled from "styled-components";
import CategoryItem from "./CategoryItem";

const Container = styled.div`
  flex: 1;
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

const CategoryList = ({}) => {
  const Categories = [
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
      <Link style={{ textDecoration: "none" }} href={"/about"}>
        <AboutContainer>
          <AboutText>About</AboutText>
        </AboutContainer>
      </Link>
      {Categories.map((category, index) => (
        <CategoryItem key={index} category={category} onClickCategory={""} />
      ))}
    </Container>
  );
};

export default CategoryList;
