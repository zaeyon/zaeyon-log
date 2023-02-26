import Layout from "../components/Layout";
import styled from "styled-components";

const Container = styled.div`
  width: 51rem;
  height: 150rem;
  background: #eeeeee;
`;

export default function Home() {
  return (
    <Layout>
      <Container></Container>
    </Layout>
  );
}
