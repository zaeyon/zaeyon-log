import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import codeBlock from "../styles/codeBlock";
import style from "./styles/post-markdown.module.css";
import {post} from '../lib/type';

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

import BlankProfileImagePNG from "../../public/images/blank_profile.png";

interface props {
  postData: post
}

const PostMarkdown: React.FC<props> = ({ postData }) => {
  console.log("PostDetail postData", postData);

  const customStyle = {
    marginTop: "15px",
    fontSize: "13.7px",
    wrapLines: true,
  };

  const getFormattedDate = (date: any) => {
    const dateArray = date.split(".");
    const year = dateArray[0];
    const month = dateArray[1] < 10 ? parseInt(dateArray[1]) : dateArray[1];
    const day = dateArray[2] < 10 ? parseInt(dateArray[2]) : dateArray[2];

    return year + "년 " + month + "월 " + day + "일";
  };

  return (
    <div className={style.container}>
      <div className={style.headerContainer}>
        <div className={style.titleText}>{postData.title}</div>
        <div className={style.metaDataContainer}>
          <Image
            className={style.writerProfileImage}
            src={BlankProfileImagePNG}
            alt={""}
          />
          <span className={style.writerNameText}>ZAEYON</span>
          <span className={style.dateText}>
            • {getFormattedDate(postData?.date)} 작성
          </span>
        </div>
      </div>
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
                lineHeight: 2,
                fontStyle: "normal",
                fontSize: 18,
                fontWeight: 700,
                color: "#000000",
              }}
              {...props}
            ></i>
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
                lineProps={{
                  style: { wordBreak: "break-all", whiteSpace: "pre-wrap" },
                }}
                wrapLines={true}
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
      <div className={style.footerContainer}>
        {postData.reference ? (
          <div>
            <div className={style.referenceTitleText}>참고자료</div>
            {postData.reference.map((item, index) => (
              <div key={index}>
                <Link
                  className={style.referenceItemLink}
                  key={index}
                  href={item.url}
                  target="_blank"
                >
                  {item.title}
                </Link>
              </div>
            ))}
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default React.memo(PostMarkdown);
