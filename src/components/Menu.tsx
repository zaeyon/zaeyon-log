import { useEffect, useLayoutEffect, useState } from "react";
import { animated, useSpring } from "@react-spring/web";
import style from "./styles/menu.module.css";

import CategoryList from "./CategoryList";
import MobileCategoryList from "./MobileCategoryList";

interface categoryObj {
  key: string,
}

interface props {
  onClickCategoryItem: (category: categoryObj) => void,
  onClickMobileCategoryItem: (category: categoryObj) => void,
  onClickAboutCategoryItem: () => void,
  headerEvent: string,
  visibleMenu: boolean,
  postsNumber: number,
  scrolling: boolean,
  isMobile: boolean,
}

const Menu: React.FC<props> = ({
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

  return (
    !isMobile ? (
      <animated.div
        className={style.container}
        style={{
          zIndex: visibleMenu ? 1 : -1,
          height: visibleMenu ? "100vh" : 0,
          width: visibleMenu ? "12rem" : 0,
          opacity: visibleMenu ? 1 : 0,
          paddingTop: topDistance,
          ...menuSprings,
        }}
      >
        <CategoryList
          postsNumber={postsNumber}
          onClickCategoryItem={onClickCategoryItem}
        />
      </animated.div>
    )
   : (
    visibleMenu ? (
      <div
        className={style.mobileContainer}
        style={{ width: "100vw", height: "100vh", paddingTop: "5rem" }}
      >
        <MobileCategoryList
          postsNumber={postsNumber}
          onClickCategoryItem={onClickMobileCategoryItem}
          onClickAboutCategoryItem={onClickAboutCategoryItem}
        />
      </div>
    ) : <div/>
  )
  )
};

export default Menu;
