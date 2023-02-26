import Layout from "../components/Layout";
import styled from "styled-components";

const Container = styled.div`
  width: 51rem;
  height: 100rem;
  background: #eeeeee;
  font-size: 50px;
  white-space: pre-line;
`;

export default function Home() {
  return (
    <Layout>
      <Container />
    </Layout>
  );
}
