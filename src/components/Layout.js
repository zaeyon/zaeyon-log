import { useState, useEffect, useLayoutEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";

import Header from "./Header";
import Menu from "./Menu";
import { setVisibleMenu } from "../features/visibleMenuSlice";

const Container = styled.div`
  width: 100%;
  background: #f2f2f2;
`;

const ExceptMenuContainer = styled.div`
  width: 100%;
  background: #f2f2f2;
  display: flex;
  justify-content: center;
`;

const ContentContainer = styled.div`
  padding-top: 9rem;
  padding-bottom: 4rem;
`;

const Layout = ({ children }) => {
  //const [visibleMenu, setVisibleMenu] = useState(false);
  const [headerEvent, setHeaderEvent] = useState("default");
  const [preventAni, setPreventAni] = useState(false);

  const dispatch = useDispatch();
  const visibleMenu = useSelector((state) => state.visibleMenu.value);

  const onClickMenu = () => {
    if (visibleMenu) {
      //setVisibleMenu(false);
      dispatch(setVisibleMenu(false));
    } else {
      //setVisibleMenu(true);

      dispatch(setVisibleMenu(true));
    }
  };

  const onClickExceptMenu = () => {
    if (visibleMenu) {
      //setVisibleMenu(false);

      dispatch(setVisibleMenu(false));
    }
  };

  const createScrollStopListener = (element, callback, timeout) => {
    var handle = null;
    const onScrollEvent = () => {
      console.log("visibleMenu", visibleMenu);
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
      <Menu
        headerEvent={headerEvent}
        preventAni={preventAni}
        visibleMenu={visibleMenu}
      />
      <ExceptMenuContainer onClick={onClickExceptMenu}>
        <Header headerEvent={headerEvent} onClickMenu={onClickMenu} />
        <ContentContainer>{children}</ContentContainer>
      </ExceptMenuContainer>
    </Container>
  );
};

export default Layout;
