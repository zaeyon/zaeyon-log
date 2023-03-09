import { useState, useEffect, useLayoutEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import Header from "./Header";
import Menu from "./Menu";
import { setVisibleMenu } from "../features/visibleMenuSlice";

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const ExceptMenuContainer = styled.div`
  flex: 1;
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  padding-bottom: 22vh;
`;

const ContentContainer = styled.div`
  padding-top: 9rem;
  padding-bottom: 4rem;
`;

const Layout = ({ children }) => {
  //const [visibleMenu, setVisibleMenu] = useState(false);
  const [headerEvent, setHeaderEvent] = useState("default");
  const [preventAni, setPreventAni] = useState(false);

  const postsNumber = useSelector((state) => state.postsNumber?.value);

  const router = useRouter();

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

  const onClickHeaderLogo = () => {
    router.push("/");
    if (headerEvent === "shrink") {
      setHeaderEvent("expand");
      localStorage.setItem("headerEvent", "expand");
    }
  };

  const createScrollStopListener = (element, callback, timeout) => {
    var handle = null;
    const onScrollEvent = () => {
      console.log("visibleMenu", visibleMenu);
      if (handle) {
        if (window.scrollY > 0.12 * window.innerHeight) {
          setHeaderEvent("shrink");
          localStorage.setItem("headerEvent", "shrink");
        } else {
          if (headerEvent === "shrink") {
            setHeaderEvent("expand");
            localStorage.setItem("headerEvent", "expand");
          }
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
        postsNumber={postsNumber}
        headerEvent={headerEvent}
        preventAni={preventAni}
        visibleMenu={visibleMenu}
      />
      <ExceptMenuContainer onClick={onClickExceptMenu}>
        <Header
          onClickHeaderLogo={onClickHeaderLogo}
          headerEvent={headerEvent}
          onClickMenu={onClickMenu}
        />
        <ContentContainer>{children}</ContentContainer>
      </ExceptMenuContainer>
    </Container>
  );
};

export default Layout;
