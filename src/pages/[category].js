import Layout from "../components/Layout";
import { getCategoryParams } from "../lib/categorys";
import styled from "styled-components";

const Container = styled.div`
  width: 46rem;
  background: #ffffff;
`;

export async function getStaticPaths() {
  const paths = getCategoryParams();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  console.log("getStatcProps params", params);
  return {
    props: {
      category: params.category,
    },
  };
}

export default function Category({ category }) {
  return (
    <Layout>
      <Container>{category}</Container>
    </Layout>
  );
}
