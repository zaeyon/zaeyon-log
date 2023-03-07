import styled from "styled-components";

const Container = styled.form`
  display: flex;
  flex-direction: column;
`;

const NameInput = styled.input`
  width: 5rem;
  padding: 7px;
  font-size: 14.5px;
  border: 0.5px solid #25252530;
  background: #f2f2f250;
  border-radius: 5px;
`;

const PasswordInput = styled.input`
  margin-left: 10px;
  width: 5rem;
  padding: 7px;
  font-size: 14.5px;
  border: 0.5px solid #25252530;
  background: #f2f2f250;
  border-radius: 5px;
`;

const WriterInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const ContentInput = styled.textarea`
  margin-top: 10px;
  padding: 7px;
  height: 4rem;
  font-size: 14.5px;
  resize: none;
  border: 0.5px solid #25252530;
  background: #f2f2f250;
  border-radius: 5px;
`;

const PostButton = styled.button`
  opacity: 0.9;
  padding: 5px 12px;
  border-radius: 5px;
  background-color: #282d61;
  color: white;
  border: none;
  font-size: 14.5px;

  :hover {
    opacity: 0.6;
  }
`;

const CommentInput = () => {
  return (
    <Container>
      <WriterInfoContainer>
        <div>
          <NameInput placeholder="이름" />
          <PasswordInput placeholder="비밀번호" type="password" />
        </div>
        <PostButton>댓글 작성</PostButton>
      </WriterInfoContainer>{" "}
      <ContentInput placeholder="내용" rows={5} />
    </Container>
  );
};

export default CommentInput;
