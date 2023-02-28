import styled from "styled-components";
import Link from "next/link";

const Container = styled.div`
  padding: 18px 10px 18px 10px;

  border-bottom: 2.5px solid #efefef;
  display: flex;
  align-items: center;
`;

const CategoryText = styled.div`
  font-size: 19px;
  color: #595959;
  font-family: "Jost-Medium";
`;

const CategoryItem = ({ category, onClickCategory }) => {
  return (
    <Link
      style={{
        textDecoration: "none",
      }}
      href={`/${category.key}`}
    >
      <Container>
        <CategoryText
          onClick={() => {
            console.log("onClick CategoryItem");
          }}
        >
          {category.text}
        </CategoryText>
      </Container>
    </Link>
  );
};

export default CategoryItem;
