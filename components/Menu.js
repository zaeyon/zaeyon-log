import styled from "styled-components";
import CategoryList from "./CategoryList";

const Container = styled.div`
  background: #ffffff;
  position: fixed;
  display: flex;
  left: 0;
  top: 6.5rem;
  padding: 20px 30px;
  height: 200%;
  width: 13rem;
  box-shadow: 3px 0px 25px -10px #27272750;
`;

const Menu = ({}) => {
  return (
    <Container>
      <CategoryList onClickCategory={""} />
    </Container>
  );
};

export default Menu;
