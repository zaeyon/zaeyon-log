import { useEffect, useLayoutEffect, useState } from "react";
import { animated, useSpring } from "@react-spring/web";
import styled from "styled-components";
import CategoryList from "./CategoryList";

const Container = styled.div`
  background: #ffffff;
  position: fixed;
  display: flex;
  left: 0;
  top: 6.5rem;
  padding: 20px 30px;
  height: 200%;
  width: 13rem;
  box-shadow: 3px 0px 25px -10px #27272750;
`;

const Menu = ({ headerEvent, visibleMenu }) => {
  const [topDistance, setTopDistance] = useState("6.5rem");
  const [menuSprings, menuApi] = useSpring(() => ({
    config: {
      mass: 1.2,
      friction: 30,
      tension: 345,
    },
  }));

  useEffect(() => {
    if (headerEvent === "shrink") {
      menuApi.start({
        from: {
          paddingTop: "6.5rem",
        },
        to: {
          paddingTop: "3.8rem",
        },
      });
    } else if (headerEvent === "expand") {
      menuApi.start({
        from: {
          paddingTop: "3.8rem",
        },
        to: {
          paddingTop: "6.5rem",
        },
      });
    }
  }, [headerEvent]);

  useLayoutEffect(() => {
    if (localStorage.getItem("headerEvent") === "shrink") {
      setTopDistance("3.8rem");
    } else if (localStorage.getItem("headerEvent") === "expand") {
      setTopDistance("6.5rem");
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
        width: "13rem",
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
