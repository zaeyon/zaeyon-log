import React from "react";
import styled from "styled-components";
import Image from "next/image";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import codeBlock from "../styles/codeBlock";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

import Layout from "./Layout";
import ProfileImagePNG from "../../public/images/profile.png";

const Container = styled.div`
  font-size: 20px;
  color: black;
  padding: 33px 20px 20px 20px;
`;

const Footercontainer = styled.div`
  margin-top: 110px;
  padding-bottom: 10px;
`;

const ReferenceContainer = styled.div`
  font-weight: 600;
  font-size: 16px;
  color: #25252595;
`;

const ReferenceItemContainer = styled.div`
  margin-top: 5px;
`;

const ReferenceItem = styled.a`
  color: #25252580;
  font-weight: 500;
  font-style: italic;
`;

const HeaderContainer = styled.div`
  padding: 0px 17px 30px 17px;
`;

const TitleText = styled.div`
  font-style: "normal";
  font-size: 43px;
  font-weight: 700;
  color: #000748;
  font-family: "Jost-Medium";
`;

const MetaDataContainer = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const WriterProfileImage = styled(Image)`
  border-radius: 100px;
  width: 1.7rem;
  height: 1.7rem;
`;

const WriterNameText = styled.span`
  margin-left: 9px;
  font-size: 15px;
  color: #464646;
  font-weight: 500;
`;

const DateContainer = styled.span`
  margin-left: 5px;
  font-size: 15px;
  color: #464646;
  font-weight: 500;
`;

const PostMarkdown = ({ postData }) => {
  console.log("PostDetail postData", postData);

  const customStyle = {
    marginTop: "15px",
    fontSize: "13.7px",
  };

  const getFormattedDate = (date) => {
    const dateArray = date.split(".");
    const year = dateArray[0];
    const month = dateArray[1] < 10 ? parseInt(dateArray[1]) : dateArray[1];
    const day = dateArray[2] < 10 ? parseInt(dateArray[2]) : dateArray[2];

    return year + "년 " + month + "월 " + day + "일";
  };

  return (
    <Container>
      <HeaderContainer>
        <TitleText>{postData.title}</TitleText>
        <MetaDataContainer>
          <WriterProfileImage src={ProfileImagePNG} alt={""} />
          <WriterNameText>ZAEYON</WriterNameText>
          <DateContainer>
            • {getFormattedDate(postData?.date)} 작성
          </DateContainer>
        </MetaDataContainer>
      </HeaderContainer>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw]}
        components={{
          h1: ({ node, ...props }) => (
            <i
              style={{
                paddingLeft: 17,
                fontStyle: "normal",
                fontSize: 43,
                fontWeight: 700,
                color: "#000748",
                fontFamily: "Jost-Medium",
              }}
              {...props}
            />
          ),
          h3: ({ node, ...props }) => (
            <i
              style={{
                lineHeight: 2.7,
                fontStyle: "normal",
                fontSize: 22,
                fontWeight: 700,
                color: "#000748",
              }}
              {...props}
            />
          ),
          h4: ({ node, ...props }) => (
            <i
              style={{
                lineHeight: 1.5,
                fontStyle: "normal",
                fontSize: 17.3,
                fontWeight: 600,
                color: "#000000",
              }}
              {...props}
            />
          ),
          em: ({ node, ...props }) => (
            <em
              style={{
                background: "#e7e7e7",
                borderRadius: 5,
                paddingLeft: 4.5,
                paddingTop: 3,
                paddingBottom: 3,
                paddingRight: 4.5,
                fontSize: 15.5,
                fontWeight: 600,
                fontStyle: "normal",
              }}
              {...props}
            />
          ),
          p: ({ node, ...props }) => (
            <p
              style={{
                fontSize: 16.5,
                backgroundColor: "#f5f5f5",
                padding: 20,
                borderLeft: "7px solid #3C4276",
              }}
              {...props}
            />
          ),
          blockquote: ({ node, ...props }) => (
            <blockquote
              style={{
                backgroundColor: "#f5f5f5",
                padding: 20,
                fontStyle: "italic",
                lineHeight: 1.5,
                fontSize: 16,
              }}
              {...props}
            />
          ),
          a: ({ node, ...props }) => (
            <a
              style={{
                lineHeight: 1,
                fontSize: 17,
                textDecoration: "none",
                color: "#0066FE",
                fontWeight: "700",
              }}
              {...props}
            />
          ),
          span: ({ node, ...props }) => (
            <span
              style={{
                fontSize: 16.5,
              }}
              {...props}
            />
          ),
          img: ({ node, ...props }) => (
            <img
              style={{
                borderRadius: 9,
              }}
              {...props}
            />
          ),
          cite: ({ node, ...props }) => (
            <cite
              style={{
                fontSize: 15,
                textDecoration: "none",
              }}
              {...props}
            />
          ),
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || "");
            return !inline && match ? (
              <SyntaxHighlighter
                style={codeBlock}
                language={match[1]}
                PreTag="div"
                customStyle={customStyle}
              >
                {children}
              </SyntaxHighlighter>
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            );
          },
        }}
      >
        {postData.content}
      </ReactMarkdown>
      <Footercontainer>
        {postData.reference ? (
          <ReferenceContainer>
            참고자료
            <ReferenceItemContainer>
              {postData.reference.map((item, index) => (
                <ReferenceItem key={index} href={item.url} target="_blank">
                  {item.title}
                </ReferenceItem>
              ))}
            </ReferenceItemContainer>
          </ReferenceContainer>
        ) : (
          ""
        )}
      </Footercontainer>
    </Container>
  );
};

export default React.memo(PostMarkdown);
