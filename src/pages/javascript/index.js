import Layout from "../../components/Layout";
import { getCategoryPostsData } from "../../lib/posts";
import styled from "styled-components";
import Image from "next/image";

import PostList from "../../components/PostList";

import javascriptLogo from "../../../public/images/javascript_logo.png";

const Container = styled.div`
  width: 45rem;
  padding-top: 5px;
  @media (max-width: 50rem) {
    width: 90%;
    margin-left: 5%;
    margin-right: 5%;
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

const JavascriptLogo = styled(Image)`
  width: 2.6rem;
  height: 2.6rem;
  object-fit: cover;
  margin-right: 20px;
  border-radius: 5px;
`;

export async function getStaticProps() {
  const categoryPostsData = getCategoryPostsData("javascript");

  return {
    props: {
      category: "javascript",
      categoryPostsData: categoryPostsData,
    },
  };
}

export default function Javascript({ category, categoryPostsData }) {
  return (
    <Layout>
      <Container>
        <TitleContainer>
          <TitleText>
            <JavascriptLogo src={javascriptLogo} />
            {"Javascript"}
          </TitleText>
        </TitleContainer>
        <PostList postsData={categoryPostsData} />
      </Container>
    </Layout>
  );
}
