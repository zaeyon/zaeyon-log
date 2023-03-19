import { useEffect, useLayoutEffect, useState } from "react";
import Link from "next/link";
import styled from "styled-components";
import Image from "next/image";
import { animated, useSpring } from "@react-spring/web";
import headerStyles from "../styles/header.module.css";
import MenuIconPNG from "../../public/images/icons/hamburger.png";

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

const LogoContainer = styled.div`
  padding: 0px 5px;
  cursor: pointer;
  color: white;
  font-size: 42px;
  font-family: "Jost-Medium";
`;

const Header = ({ onClickMenu, headerEvent, onClickHeaderLogo }) => {
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

  return (
    <animated.div
      className={headerStyles.container}
      style={{
        zIndex: 10,
        opacity: "0.96",
        height: headerHeight,
        position: "fixed",
        background: "black",
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
      <LogoContainer onClick={onClickHeaderLogo}>ZAEYON LOG</LogoContainer>
      <EmptyContainer />
    </animated.div>
  );
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
