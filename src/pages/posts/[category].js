import Layout from "../../components/Layout";
import { getCategoryParams } from "../../lib/categorys";
import { getCategoryPostsData } from "../../lib/posts";
import styled from "styled-components";
import Image from "next/image";

import PostList from "../../components/PostList";

import reactLogo from "../../../public/images/react_logo.png";
import javascriptLogo from "../../../public/images/javascript_logo.png";

const Container = styled.div`
  padding: 15px;
  width: 46rem;
  @media (max-width: 50rem) {
    width: 90%;
  }
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
`;

const TitleText = styled.div`
  display: flex;
  align-items: center;
  font-size: 35px;
  font-weight: 500;
  font-family: "Jost-Medium";
  padding-left: 20px;
`;

const ReactLogo = styled(Image)`
  width: 2.6rem;
  height: 2.3rem;
  object-fit: cover;
  margin-right: 10px;
`;

const JavascriptLogo = styled(Image)`
  width: 2.6rem;
  height: 2.6rem;
  object-fit: cover;
  margin-right: 20px;
  border-radius: 5px;
`;

export async function getStaticPaths() {
  const paths = getCategoryParams();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const categoryPostsData = getCategoryPostsData(params.category);

  console.log("getStatcProps params", params);
  return {
    props: {
      category: params.category,
      categoryPostsData: categoryPostsData,
    },
  };
}

export default function Category({ category, categoryPostsData }) {
  return (
    <Layout>
      <Container>
        <TitleContainer>
          {category === "react" && (
            <TitleText>
              <ReactLogo src={reactLogo} />
              {"React"}
            </TitleText>
          )}
          {category === "react-native" && (
            <TitleText>
              <ReactLogo src={reactLogo} />
              {"React Native"}
            </TitleText>
          )}
          {category === "javascript" && (
            <TitleText>
              <JavascriptLogo src={javascriptLogo} />
              {"Javascript"}
            </TitleText>
          )}
        </TitleContainer>
        <PostList postsData={categoryPostsData} />
      </Container>
    </Layout>
  );
}
