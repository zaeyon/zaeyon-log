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

const Header = ({ onClickMenu, headerEvent }) => {
  const [headerHeight, setHeaderHeight] = useState("6.5rem");

  const [springs, api] = useSpring(() => ({
    config: {
      mass: 1.6,
      friction: 30,
      tension: 1200,
    },
  }));

  useEffect(() => {
    if (headerEvent === "shrink") {
      api.start({
        from: {
          height: "6.5rem",
        },
        to: {
          height: "3.8rem",
        },
      });
    } else if (headerEvent === "expand") {
      api.start({
        from: {
          height: "3.8rem",
        },
        to: {
          height: "6.5rem",
        },
      });
    }
  }, [headerEvent]);

  useLayoutEffect(() => {
    if (localStorage.getItem("headerEvent") === "shrink") {
      setHeaderHeight("3.8rem");
    } else if (localStorage.getItem("headerEvent") === "expand") {
      setHeaderHeight("6.5rem");
    }
  }, [headerHeight, headerEvent]);

  return (
    <animated.div
      className={headerStyles.container}
      style={{
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
      <Link style={{ textDecoration: "none" }} href={"/"}>
        <LogoContainer>ZAEYON LOG</LogoContainer>
      </Link>
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
