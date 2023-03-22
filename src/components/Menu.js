import { useEffect, useLayoutEffect, useState } from "react";
import { animated, useSpring } from "@react-spring/web";
import styled from "styled-components";

import CategoryList from "./CategoryList";
import MobileCategoryList from "./MobileCategoryList";

const MobileMenu = styled.div`
  width: 100vw;
  z-index: 1;
  height: 100vh;
  background: #ffffff;
  position: fixed;
  padding-bottom: 20px;
  padding-top: 5rem;
  box-shadow: 3px 0px 25px -10px #27272750;
`;

const Menu = ({
  onClickCategoryItem,
  onClickMobileCategoryItem,
  onClickAboutCategoryItem,
  headerEvent,
  visibleMenu,
  postsNumber,
  scrolling,
  isMobile,
}) => {
  const [topDistance, setTopDistance] = useState("7.5rem");
  const [menuSprings, menuApi] = useSpring(() => ({
    config: {
      mass: 1.6,
      friction: 30,
      tension: 600,
    },
  }));

  useEffect(() => {
    if (headerEvent === "shrink" && scrolling && topDistance === "7.5rem") {
      menuApi.start({
        from: {
          paddingTop: "7.5rem",
        },
        to: {
          paddingTop: "4.8rem",
        },
      });
    } else if (
      headerEvent === "expand" &&
      scrolling &&
      topDistance === "4.8rem"
    ) {
      menuApi.start({
        from: {
          paddingTop: "4.8rem",
        },
        to: {
          paddingTop: "7.5rem",
        },
      });
    }
  }, [headerEvent, scrolling]);

  useLayoutEffect(() => {
    if (localStorage.getItem("headerEvent") === "shrink") {
      setTopDistance("4.8rem");
    } else if (localStorage.getItem("headerEvent") === "expand") {
      setTopDistance("7.5rem");
    }
  }, [topDistance, headerEvent]);

  if (isMobile) {
    return (
      visibleMenu && (
        <MobileMenu>
          <MobileCategoryList
            postsNumber={postsNumber}
            onClickCategoryItem={onClickMobileCategoryItem}
            onClickAboutCategoryItem={onClickAboutCategoryItem}
          />
        </MobileMenu>
      )
    );
  } else {
    return (
      <animated.div
        style={{
          zIndex: visibleMenu ? 1 : -1,
          height: visibleMenu ? "100vh" : 0,
          width: visibleMenu ? "9rem" : 0,
          opacity: visibleMenu ? 1 : 0,
          background: "#ffffff",
          position: "fixed",
          display: "flex",
          left: 0,
          paddingLeft: "10px",
          paddingRight: "10px",
          paddingBottom: "20px",
          paddingTop: topDistance,
          boxShadow: "3px 0px 25px -10px #27272750",
          ...menuSprings,
        }}
      >
        <CategoryList
          postsNumber={postsNumber}
          onClickCategoryItem={onClickCategoryItem}
        />
      </animated.div>
    );
  }
};

export default Menu;
