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

const Menu = ({ headerEvent }) => {
  const [topDistance, setTopDistance] = useState("6.5rem");
  const [springs, api] = useSpring(() => ({
    config: {
      mass: 1.2,
      friction: 30,
      tension: 300,
    },
  }));

  useEffect(() => {
    if (headerEvent === "shrink") {
      api.start({
        from: {
          top: "6.5rem",
        },
        to: {
          top: "3.8rem",
        },
      });
    } else if (headerEvent === "expand") {
      api.start({
        from: {
          top: "3.8rem",
        },
        to: {
          top: "6.5rem",
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
        background: "#ffffff",
        position: "fixed",
        display: "flex",
        left: 0,
        top: topDistance,
        padding: "20px 30px",
        height: "200rem",
        width: "13rem",
        boxShadow: "3px 0px 25px -10px #27272750",
        ...springs,
      }}
    >
      <CategoryList onClickCategory={""} />
    </animated.div>
  );
};

export default Menu;
