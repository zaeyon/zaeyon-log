import styled from "styled-components";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import codeBlock from "../styles/codeBlock";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

import Layout from "./Layout";
const Container = styled.div`
  padding: 60px 20px 20px 20px;
  background: white;
  font-size: 20px;
  color: black;
  border-radius: 7px;
  box-shadow: 0px 0px 30px 15px #25252508;
  margin-bottom: 5rem;
`;

const DateContainer = styled.div`
  background: white;
  display: flex;
  justify-content: flex-end;
  font-size: 15px;
  color: #bbbbbb;
  padding-top: 100px;
  font-weight: 600;
`;

const PostDetail = ({ postData }) => {
  console.log("PostDetail postData", postData);

  const customStyle = {
    fontSize: "13.7px",
  };

  return (
    <Container>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw]}
        components={{
          h1: ({ node, ...props }) => (
            <i
              style={{
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
                backgroundColor: "#f5f5f5",
                padding: 20,
                borderLeft: "7px solid #3C4276",
              }}
              {...props}
            />
          ),
          a: ({ node, ...props }) => (
            <a
              style={{
                lineHeight: 3,
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
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || "");
            return !inline && match ? (
              <SyntaxHighlighter
                children={String(children).replace(/\n$/, "")}
                style={codeBlock}
                language={match[1]}
                PreTag="div"
                customStyle={customStyle}
              />
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
      <DateContainer>{postData?.date}</DateContainer>
    </Container>
  );
};

export default PostDetail;
