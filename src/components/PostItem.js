import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

import MenuIconPNG from "../../public/images/icons/hamburger.png";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 13.5rem;
  height: 16rem;
  margin-bottom: 1.4rem;
  border-radius: 5px;
  background: #ffffff;
  box-shadow: 0px 0px 30px 5px #27272710;
  @media (max-width: 470px) {
    width: 90vw;
    height: 55vw;
  }
`;

const ThumbnailImg = styled(Image)`
  border-radius: 5px;
  width: 5rem;
  height: 5rem;
  object-fit: cover;
`;

const TitleContainer = styled.div`
  overflow: hidden;
  padding: 13px 13px 5px 13px;
  font-size: 20px;
  font-weight: 600;
  color: black;
`;

const ContentContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const PreviewContainer = styled.div`
  padding: 5px 13px 10px 13px;
  background-color: white;
  color: #2f2f2f;
  overflow: hidden;
`;

const ThumbnailImgContainer = styled.div`
  display: flex;
  justify-content: space-between;
  background: white;
  padding: 13px 13px 13px 13px;
  border-radius: 5px;
`;

const DateContainer = styled.div`
  display: flex;
  align-items: flex-end;
  color: #bbbbbb;
  font-size: 14px;
  font-weight: 700;
`;

const PostItem = ({ post }) => {
  console.log("PostListItem post", post);
  return (
    <Link
      onClick={(e) => e.stopPropagation()}
      style={{ textDecoration: "none" }}
      href={{
        pathname: `/${post.category}/${post.title}`,
      }}
    >
      <Container>
        <TitleContainer>{post.title}</TitleContainer>
        <ContentContainer>
          <PreviewContainer>{post.preview}</PreviewContainer>
          <ThumbnailImgContainer>
            <ThumbnailImg
              width={150}
              height={150}
              priority={true}
              src={post.thumbnail}
              alt={"thumbnail image"}
            />
            <DateContainer>{post.date}</DateContainer>
          </ThumbnailImgContainer>
        </ContentContainer>
      </Container>
    </Link>
  );
};

export default PostItem;
