import { useEffect, useLayoutEffect, useState } from "react";
import { animated, useSpring } from "@react-spring/web";
import styled from "styled-components";
import CategoryList from "./CategoryList";

const Menu = ({ headerEvent, visibleMenu }) => {
  const [topDistance, setTopDistance] = useState("7.5rem");
  const [menuSprings, menuApi] = useSpring(() => ({
    config: {
      mass: 1.6,
      friction: 30,
      tension: 380,
    },
  }));

  useEffect(() => {
    if (headerEvent === "shrink") {
      menuApi.start({
        from: {
          paddingTop: "7.5rem",
        },
        to: {
          paddingTop: "4.8rem",
        },
      });
    } else if (headerEvent === "expand") {
      menuApi.start({
        from: {
          paddingTop: "4.8rem",
        },
        to: {
          paddingTop: "7.5rem",
        },
      });
    }
  }, [headerEvent]);

  useLayoutEffect(() => {
    if (localStorage.getItem("headerEvent") === "shrink") {
      setTopDistance("4.8rem");
    } else if (localStorage.getItem("headerEvent") === "expand") {
      setTopDistance("7.5rem");
    }
  }, [topDistance]);

  return (
    <animated.div
      style={{
        opacity: visibleMenu ? 1 : 0,
        background: "#ffffff",
        position: "fixed",
        display: "flex",
        left: 0,
        paddingLeft: "30px",
        paddingRight: "30px",
        paddingBottom: "20px",
        paddingTop: topDistance,
        height: "100vh",
        width: "9rem",
        boxShadow: "3px 0px 25px -10px #27272750",
        ...menuSprings,
      }}
    >
      {visibleMenu && (
        <CategoryList
          onClickCategory={() => {
            console.log("onClickCategory");
          }}
        />
      )}
    </animated.div>
  );
};

export default Menu;
