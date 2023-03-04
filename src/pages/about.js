import styled from "styled-components";

import Layout from "../components/Layout";

const FullContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  margin-top: 10px;
  padding: 12px;
  height: 1000px;
  width: 45rem;
  background: #ffffff;
  border-radius: 7px;
  box-shadow: 0px 0px 20px 8px #27272710;
  @media (max-width: 45rem) {
    width: 95%;
    margin-left: 2.5%;
    margin-right: 2.5%;
  }
`;

const AboutContainer = styled.div`
  display: flex;
  align-items: center;
  padding-top: 5px;
  padding-left: 5px;
  padding-bottom: 5px;
  width: 46rem;
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
  color: #000748;
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
  width: 12rem;
  font-size: 19px;
  font-weight: 500;
  color: #00000097;
`;

const CareerTextContainer = styled.span`
  padding: 0px 0px 0px 13px;
`;

const CareerText = styled.div`
  font-size: 19px;
  font-weight: 500;
  padding-bottom: 4px;
`;

const TechStackText = styled.span`
  font-size: 17px;
  color: #25252570;
`;

const DescriptionText = styled.div`
  margin-top: 6px;
  font-size: 16px;
  font-weight: 300;
  color: #000000;
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
                  소비 항목 리뷰 및 데이터 분석 모바일 어플 프론트엔드 개발
                </CareerText>
                <CareerText>
                  사용자 맞춤 치아 관리 및 치과 리뷰 모바일 어플 프론트엔드 개발
                </CareerText>
                <DescriptionText>
                  초기 스타트업에 프론트엔드 개발자로 합류하여 React Native를
                  사용하여 두 개의 모바일 하이브리드(Ios&Android) 어플을
                  개발하였습니다.
                </DescriptionText>
              </CareerTextContainer>
            </CareerItemContainer>
          </IntroduceContainer>
        </Container>
      </FullContainer>
    </Layout>
  );
};

export default About;
