import { useEffect, useRef, useLayoutEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import Image from "next/image";
import { animated, useSpring } from "@react-spring/web";
import LocalStorage from "../lib/localStorage";
import headerStyles from "../styles/header.module.css";

import backgroundPNG from "../public/images/header_background.png";
import MenuIconPNG from "../public/images/icons/hamburger.png";

const expandedHeight =
  typeof window !== "undefined"
    ? 6.5 * parseInt(getComputedStyle(document.documentElement).fontSize)
    : "";

const shrinkedHeight =
  typeof window !== "undefined"
    ? 3.8 * parseInt(getComputedStyle(document.documentElement).fontSize)
    : "";

const viewWidth = typeof window !== "undefined" ? window.innerWidth : 1219;

const ShrinkHeader = () => keyframes`
  from {
    height: 6.5rem
  }
  to {
    height: 3.8rem
  }
`;

const ExpandHeader = () => keyframes`
 from {
  height: 3.8rem
 }
 to {
  height: 6.5rem
 }
`;

const DecreaseHeader = (scrollDown, scrollEvent) => keyframes`
from {
  //height: ${!scrollEvent ? "3.8rem" : "6.5rem"};
  height: 6.5rem;
  }
to {
  height: ${scrollDown ? "3.8rem" : "6.5rem"};
}
`;

const IncreaseHeader = (scrollUp, scrollEvent) => keyframes`
from {
  height: ${!scrollEvent ? "6.5rem" : "3.8rem"};
  }
to {
  height: ${scrollUp ? "6.5rem" : "3.8rem"};
}
`;

const HeaderContainer = styled.div`
  width: 100vw;
  height: ${(props) =>
    typeof window !== "undefined"
      ? localStorage.getItem("scrollState") === "down"
        ? "3.8rem"
        : localStorage.getItem("scrollState") === "up"
        ? "6.5rem"
        : "6.5rem"
      : 0};
  opacity: 0.96;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0px 1px 25px 5px #27272760;
  animation: ${(props) =>
      props.scrollDown && props.scrollEvent
        ? DecreaseHeader(props.scrollDown, props.scrollEvent)
        : props.scrollUp
        ? IncreaseHeader(props.scrollUp, props.scrollEvent)
        : ""}
    0.1s linear forwards;
`;

const HeaderInnerContainer = styled.div`
  width: 100vw;
  height: ${typeof window !== "undefined"
    ? localStorage.getItem("scrollState") === "down"
      ? "3.8rem"
      : localStorage.getItem("scrollState") === "up"
      ? "6.5rem"
      : "6.5rem"
    : "6.5rem"};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  animation: ${(props) =>
      props.scrollDown && props.scrollEvent
        ? DecreaseHeader(props.scrollDown, props.scrollEvent)
        : props.scrollUp
        ? IncreaseHeader(props.scrollUp, props.scrollEvent)
        : ""}
    0.1s linear forwards;
`;

const HeaderBackgroundImg = styled(Image)`
  width: 100vw;
  height: ${typeof window !== "undefined"
    ? localStorage.getItem("scrollState") === "down"
      ? "3.8rem"
      : localStorage.getItem("scrollState") === "up"
      ? "6.5rem"
      : "6.5rem"
    : "6.5rem"};
  position: absolute;
  object-fit: cover;
  animation: ${(props) =>
      props.scrollDown && props.scrollEvent
        ? DecreaseHeader(props.scrollDown, props.scrollEvent)
        : props.scrollUp
        ? IncreaseHeader(props.scrollUp, props.scrollEvent)
        : ""}
    0.1s linear forwards;
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

const LogoContainer = styled.div`
  padding: 0px 5px;
  cursor: pointer;
  color: white;
  font-size: 42px;
  font-family: "Jost-Medium";
`;

const Header = ({ onClickMenu, scrollDown, scrollUp }) => {
  const [headerHeight, setHeaderHeight] = useState("6.5rem");
  const [springs, api] = useSpring(() => ({
    config: {
      mass: 1.2,
      friction: 18,
      tension: 190,
    },
  }));

  useEffect(() => {
    if (scrollDown) {
      api.start({
        from: {
          height: "6.5rem",
        },
        to: {
          height: "3.8rem",
        },
      });
    } else if (scrollUp) {
      api.start({
        from: {
          height: "3.8rem",
        },
        to: {
          height: "6.5rem",
        },
      });
    }
  }, [scrollDown, scrollUp]);

  useLayoutEffect(() => {
    if (localStorage.getItem("headerEvent") === "shrink") {
      setHeaderHeight("3.8rem");
    } else if (localStorage.getItem("headerEvent") === "expand") {
      setHeaderHeight("6.5rem");
    }
  }, [headerHeight]);

  return (
    <animated.div
      className={headerStyles.container}
      style={{
        height: headerHeight,
        position: "fixed",
        background: "black",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundImage: "url(/images/header_background.png)",
        backgroundSize: "cover",
        ...springs,
      }}
    >
      <MenuIconContainer onClick={onClickMenu}>
        <MenuIconImg priority={true} alt={"menuicon"} src={MenuIconPNG} />
      </MenuIconContainer>
      <LogoContainer>ZAEYON LOG</LogoContainer>
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
