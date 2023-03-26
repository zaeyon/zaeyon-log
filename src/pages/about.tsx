import {useState, useLayoutEffect} from 'react';
import style from '../styles/about-page.module.css';
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Layout from "../components/Layout";
import GithubIconPNG from "../../public/images/icons/github.png";
import ProfileImagePNG from "../../public/images/profile.png";
import BlankProfileImagePNG from '../../public/images/blank_profile.png';


interface props {
  
}

const About: React.FC<props> = ({}) => {
  const [isMobile, setIsMobile] = useState(false);

  useLayoutEffect(() => {
    if (window.innerWidth < 470) {
      setIsMobile(true);
    }
  }, []);
  
  return (
    <Layout
    isMobile={isMobile}>
      <Head>
        <title>{"About"}</title>
      </Head>
      <div
      className={style.fullContainer}>
        <div
        className={style.aboutWrapper}>
          <div
          className={style.aboutText}>
            <span
            className={style.emoji}>👨🏻‍💻</span>
            About
          </div>
        </div>
        <div
        className={style.container}>
          <div
          className={style.profileContainer}>
            <Image
            className={style.profileImage}
            src={BlankProfileImagePNG} 
            alt={""} />
            <div
            className={style.profileContentContainer}>
              <div
              className={style.nameText}>이재연</div>
              <div
              className={style.specialtyText}>Front-end Developer</div>
              {isMobile && (
              <div
              className={style.mobileSocialWrapper}>
                <a href={"https://github.com/zaeyon"} target="_blank">
                 <Image
                 className={style.githubIconImage}
                 src={GithubIconPNG} alt={""} />
                </a>
              </div>
              )}
            </div>
            {!isMobile && (
              <div
              className={style.socialWrapper}>
                <a href={"https://github.com/zaeyon"} target="_blank">
                <Image
                className={style.githubIconImage}
                src={GithubIconPNG} alt={""} />
                </a>
              </div>
              )}
          </div>
          <div
          className={style.dividerLine} />
          <div
          className={style.introduceContainer}>
            <div
            className={style.titleText}>career</div>
            <div
            className={style.careerItemWrapper}>
              <span className={style.periodText}>20.03 - 21.04</span>
              <span
              className={style.careerContainer}>
                <div
                className={style.careerText}>
                  소비 항목 리뷰 및 데이터 분석 모바일 어플 프론트엔드 개발
                </div>
                <div
                className={style.careerText}>
                  사용자 맞춤 치아 관리 및 치과 리뷰 모바일 어플 프론트엔드 개발
                </div>
                <div
                className={style.descriptionText}>
                  초기 스타트업에 프론트엔드 개발자로 합류하여 React Native를
                  사용하여 두 개의 모바일 하이브리드(Ios&Android) 어플을
                  개발하였습니다.
                </div>
              </span>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
