import Layout from "../../components/Layout";
import { getCategoryPostsData } from "../../lib/posts";
import styled from "styled-components";
import Image from "next/image";

import PostList from "../../components/PostList";

import reactLogo from "../../../public/images/react_logo.png";

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

const ReactLogo = styled(Image)`
  width: 2.6rem;
  height: 2.3rem;
  object-fit: cover;
  margin-right: 10px;
`;

export async function getStaticProps() {
  const categoryPostsData = getCategoryPostsData("react");

  return {
    props: {
      category: "react",
      categoryPostsData: categoryPostsData,
    },
  };
}

export default function React({ category, categoryPostsData }) {
  return (
    <Layout>
      <Container>
        <TitleContainer>
          <TitleText>
            <ReactLogo src={reactLogo} />
            {"React"}
          </TitleText>
        </TitleContainer>
        <PostList postsData={categoryPostsData} />
      </Container>
    </Layout>
  );
}
