import styled from "styled-components";

import Layout from "../components/Layout";

const FullContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 45rem;
  @media (max-width: 50rem) {
    width: 90%;
    margin-left: 5%;
    margin-right: 5%;
  }
`;

const Container = styled.div`
  margin-top: 15px;
  padding: 15px;
  height: 1000px;
  background: #ffffff;
  border-radius: 7px;
  box-shadow: 0px 0px 20px 8px #27272710;
`;

const AboutContainer = styled.div`
  display: flex;
  align-items: center;
  padding-top: 10px;
  padding-left: 10px;
`;

const AboutEmoji = styled.div`
  margin-right: 13px;
  font-size: 40px;
`;

const AboutText = styled.div`
  display: flex;
  align-items: center;
  font-size: 35px;
  font-weight: 500;
  font-family: "Jost-Medium";
  padding-left: 20px;
`;

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 30px 20px 30px 20px;
`;

const ProfileContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 35px;
`;

const NameText = styled.div`
  font-size: 35px;
  font-weight: 600;
`;

const SpecialtyText = styled.div`
  margin-top: 6px;
  font-size: 25px;
  font-weight: 300;
`;

const ProfileImg = styled.img`
  width: 8rem;
  height: 8rem;
  border-radius: 100px;
  background-color: gray;
`;

const DividerLine = styled.div`
  height: 10px;
  background: #f2f2f2;
`;

const IntroduceContainer = styled.div`
  padding: 15px;
`;

const CareerItemContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const TitleText = styled.div`
  font-size: 25px;
  font-weight: 400;
  margin-bottom: 10px;
`;

const PeriodText = styled.span`
  font-size: 18px;
  font-weight: 300;
  color: #5f5f5f;
`;

const CareerTextContainer = styled.span`
  padding: 0px 0px 0px 13px;
`;

const CareerText = styled.div`
  font-size: 18px;
  font-weight: 500;
`;

const About = () => {
  return (
    <Layout>
      <FullContainer>
        <AboutContainer>
          <AboutText>
            <AboutEmoji>👨🏻‍💻</AboutEmoji>
            About
          </AboutText>
        </AboutContainer>
        <Container>
          <ProfileContainer>
            <ProfileImg />
            <ProfileContentContainer>
              <NameText>이재연</NameText>
              <SpecialtyText>Front-end Developer</SpecialtyText>
            </ProfileContentContainer>
          </ProfileContainer>
          <DividerLine />
          <IntroduceContainer>
            <TitleText>career</TitleText>
            <CareerItemContainer>
              <PeriodText>20.03 - 21.04</PeriodText>
              <CareerTextContainer>
                <CareerText>
                  소비 데이터 분석, 컨텐츠 추천 어플 프론트엔드 개발
                </CareerText>
                <CareerText>
                  사용자 맞춤 치아 관리, 치과 리뷰 어플 프론트엔드 개발
                </CareerText>
              </CareerTextContainer>
            </CareerItemContainer>
          </IntroduceContainer>
        </Container>
      </FullContainer>
    </Layout>
  );
};

export default About;
