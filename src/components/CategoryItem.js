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
  display: flex;
  align-items: center;
`;

const PostsNumberText = styled.span`
  margin-left: 5px;
  font-size: 16.5px;
  color: #595959;
  font-family: "Jost-Medium";
`;

const CategoryItem = ({ category, onClickCategory, postsNumber }) => {
  return (
    <Link
      style={{
        textDecoration: "none",
      }}
      href={`/${category.key}`}
    >
      <Container>
        <CategoryText>
          {category.text}
          <PostsNumberText> ({postsNumber})</PostsNumberText>
        </CategoryText>
      </Container>
    </Link>
  );
};

export default CategoryItem;
