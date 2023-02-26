import { useState, useEffect, useLayoutEffect } from "react";
import styled from "styled-components";
import LocalStorage from "@/lib/localStorage";

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
  const [scrollUp, setScrollUp] = useState(false);
  const [scrollDown, setScrollDown] = useState(false);
  const [headerAni, setHeaderAni] = useState("default");
  const [scrollEvent, setScrollEvent] = useState(false);

  const onClickMenu = () => {
    setVisibleMenu(!visibleMenu);
  };

  const createScrollStopListener = (element, callback, timeout) => {
    var handle = null;
    const onScrollEvent = () => {
      console.log("onScrollEvent visivleMenu", visibleMenu);
      console.log("scrollEvent", scrollEvent);
      console.log("scrollUp", scrollUp);
      console.log("scrollDown", scrollDown);
      if (visibleMenu) {
        setScrolling("true");
      }

      if (handle) {
        if (window.scrollY > 200) {
          setScrollEvent(true);
          setScrollDown(true);
          setScrollUp(false);
          localStorage.setItem("headerEvent", "shrink");
        } else {
          setScrollUp(true);
          setScrollDown(false);
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
  });

  return (
    <Container>
      {visibleMenu && <Menu />}
      <Header
        scrollEvent={scrollEvent}
        scrollDown={scrollDown}
        scrollUp={scrollUp}
        onClickMenu={onClickMenu}
      />
      <main>{children}</main>
    </Container>
  );
};

export default Layout;
