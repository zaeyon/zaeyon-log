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
  const [headerEvent, setHeaderEvent] = useState("expand");

  const onClickMenu = () => {
    setVisibleMenu(!visibleMenu);
  };

  const createScrollStopListener = (element, callback, timeout) => {
    var handle = null;
    const onScrollEvent = () => {
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
  });

  return (
    <Container>
      {visibleMenu && <Menu headerEvent={headerEvent} />}
      <Header headerEvent={headerEvent} onClickMenu={onClickMenu} />
      <main>{children}</main>
    </Container>
  );
};

export default Layout;
