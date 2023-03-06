import styled from "styled-components";

import CommentItem from "./CommentItem";

const COMMENTS_DATA = [
  {
    name: "ㅎㅇ",
    password: "1234",
    comment: "감사합니다!",
    date: "2023-03-01",
    postId: 1,
    replys: [
      {
        name: "gg",
        password: "1234",
        comment: "대댓글111",
        date: "2023-03-01",
        postId: 1,
      },
      {
        name: "ㅋㅋ",
        password: "1234",
        comment: "대댓글222",
        date: "2023-03-01",
      },
      {
        name: "ggㅋㅋ",
        password: "1234",
        comment: "대댓글3333",
        date: "2023-03-01",
        postId: 1,
      },
    ],
  },
  {
    name: "ㅎㅇㅎ",
    password: "1234",
    comment: "감사합니다!ㅋㅋ",
    date: "2023-03-05",
    postId: 1,
  },
];

const Container = styled.div`
  padding-left: 5px;
  padding-right: 5px;
  border-top: 6px solid #000748;
`;

const DividerContainer = styled.div`
  height: 2px;
  background-color: #00000010;
`;

const CommentList = ({}) => {
  return (
    <Container>
      {COMMENTS_DATA.map((comment, index) => (
        <>
          <CommentItem key={index} comment={comment} />
        </>
      ))}
    </Container>
  );
};

export default CommentList;
