import { useEffect, useLayoutEffect, useState } from "react";
import Link from "next/link";
import styled from "styled-components";
import Image from "next/image";
import { animated, useSpring } from "@react-spring/web";
import headerStyles from "../styles/header.module.css";
import MenuIconPNG from "../../public/images/icons/hamburger.png";

const MobileHeader = styled.div`
  z-index: 10;
  opacity: 0.96;
  height: 4.5rem;
  width: 100vw;
  position: fixed;
  background: #000e51;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-image: url(/images/header_background.png);
  background-size: cover;
  box-shadow: "0px 1px 25px 5px #27272760";
`;

const MobileTitleContainer = styled.div`
  padding: 0px 5px;
  cursor: pointer;
  color: white;
  font-size: ${(props) =>
    props.headerTitle === "ZAEYON LOG" ? "35px" : "30px"};
  font-family: "Jost-Medium";
  font-weight: 500;
  white-space: nowrap;
`;

const MobileMenuIconImg = styled(Image)`
  margin-top: 5px;
  width: 1.3rem;
  height: 1.1rem;
`;

const MobileEmptyContainer = styled.div`
  width: 1.3rem;
  height: 1.1rem;
  padding: 10px;
`;

const MenuIconContainer = styled.div`
  padding: 10px;
  cursor: pointer;
`;

const MenuIconImg = styled(Image)`
  width: 1.7rem;
  height: 1.5rem;
`;

const EmptyContainer = styled.div`
  width: 1.7rem;
  height: 1.5rem;
  padding: 10px;
`;

const TitleContainer = styled.div`
  padding: 0px 5px;
  cursor: pointer;
  color: white;
  font-size: ${(props) =>
    props.headerTitle === "ZAEYON LOG" ? "42px" : "37px"};
  font-family: "Jost-Medium";
  font-weight: 500;
`;

const Header = ({
  onClickMenu,
  headerEvent,
  onClickHeaderLogo,
  headerTitle,
  isMobile,
}) => {
  const [headerHeight, setHeaderHeight] = useState("6.5rem");

  const [springs, headerApi] = useSpring(() => ({
    config: {
      mass: 1.6,
      friction: 30,
      tension: 600,
    },
  }));

  useEffect(() => {
    if (headerEvent === "shrink") {
      headerApi.start({
        from: {
          height: "6.5rem",
        },
        to: {
          height: "3.8rem",
        },
      });
    } else if (headerEvent === "expand" && headerHeight === "3.8rem") {
      headerApi.start({
        from: {
          height: "3.8rem",
        },
        to: {
          height: "6.5rem",
        },
      });
    } else if (headerEvent === "default") {
      headerApi.start({
        from: {
          height: "6.5rem",
        },
        to: {
          height: "6.5rem",
        },
      });
    }
  }, [headerEvent, headerHeight, headerApi]);

  useLayoutEffect(() => {
    if (
      localStorage.getItem("headerEvent") === "expand" &&
      window.scrollY < 0.12 * window.innerHeight
    ) {
      setHeaderHeight("6.5rem");
    } else if (
      localStorage.getItem("headerEvent") === "shrink" &&
      window.scrollY > 0.12 * window.innerHeight
    ) {
      setHeaderHeight("3.8rem");
    }
  }, [headerHeight, headerEvent]);

  if (isMobile) {
    return (
      <MobileHeader>
        <MenuIconContainer onClick={onClickMenu}>
          <MobileMenuIconImg
            priority={true}
            alt={"menuicon"}
            src={MenuIconPNG}
          />
        </MenuIconContainer>
        <MobileTitleContainer
          headerTitle={headerTitle}
          onClick={onClickHeaderLogo}
        >
          {headerTitle}
        </MobileTitleContainer>
        <MobileEmptyContainer />
      </MobileHeader>
    );
  } else {
    return (
      <animated.div
        className={headerStyles.container}
        style={{
          zIndex: 10,
          opacity: "0.96",
          height: headerHeight,
          width: "100vw",
          position: "fixed",
          background: "#000e51",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundImage: "url(/images/header_background.png)",
          backgroundSize: "cover",
          boxShadow: "0px 1px 25px 5px #27272760",
          ...springs,
        }}
      >
        <MenuIconContainer onClick={onClickMenu}>
          <MenuIconImg priority={true} alt={"menuicon"} src={MenuIconPNG} />
        </MenuIconContainer>
        <TitleContainer headerTitle={headerTitle} onClick={onClickHeaderLogo}>
          {headerTitle}
        </TitleContainer>
        <EmptyContainer />
      </animated.div>
    );
  }
};

export default Header;

/*
<HeaderBackgroundImg
scrollEvent={scrollEvent}
scrollDown={scrollDown}
scrollUp={scrollUp}
priority={true}
alt={"header"}
src={backgroundPNG}
/>
*/
