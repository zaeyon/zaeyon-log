import { useState, useEffect, useLayoutEffect } from "react";
import styled from "styled-components";

import Header from "./Header";
import Menu from "./Menu";

const Container = styled.div`
  width: 100%;
  background: #f2f2f2;
  display: flex;
  justify-content: center;
`;

const Layout = ({ children }) => {
  const [visibleMenu, setVisibleMenu] = useState(false);
  const [scrolling, setScrolling] = useState("false");
  const [headerEvent, setHeaderEvent] = useState("default");
  const [preventAni, setPreventAni] = useState(false);

  const onClickMenu = () => {
    if (visibleMenu) {
      setVisibleMenu(false);
    } else {
      setPreventAni(true);
      setVisibleMenu(true);
    }
  };

  const onClickExceptMenu = () => {
    if (visibleMenu) {
      setVisibleMenu(false);
    }
  };

  const createScrollStopListener = (element, callback, timeout) => {
    var handle = null;
    const onScrollEvent = () => {
      if (visibleMenu) {
        setPreventAni(false);
      }
      if (handle) {
        if (window.scrollY > 200) {
          setHeaderEvent("shrink");
          localStorage.setItem("headerEvent", "shrink");
        } else {
          setHeaderEvent("expand");
          localStorage.setItem("headerEvent", "expand");
        }
        // 스크롤 계속 발생
        clearTimeout(handle);
      }
      handle = setTimeout(callback, timeout || 200);
    };
    element.addEventListener("scroll", onScrollEvent);

    return function () {
      element.removeEventListener("scroll", onScrollEvent);
    };
  };

  useEffect(() => {
    createScrollStopListener(window, () => {});
  }, [headerEvent]);

  return (
    <Container onClick={onClickExceptMenu}>
      {visibleMenu && (
        <Menu headerEvent={headerEvent} preventAni={preventAni} />
      )}
      <Header headerEvent={headerEvent} onClickMenu={onClickMenu} />
      <main>{children}</main>
    </Container>
  );
};

export default Layout;
