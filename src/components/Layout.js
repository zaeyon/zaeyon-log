import { useState, useEffect, useLayoutEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import Header from "./Header";
import Menu from "./Menu";
import { setVisibleMenu } from "../features/visibleMenuSlice";
import { setHeaderTitle } from "../features/headerTitleSlice";

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

const Layout = ({ children, postPage, postTitle }) => {
  //const [visibleMenu, setVisibleMenu] = useState(false);
  const [headerEvent, setHeaderEvent] = useState("expand");
  const [preventAni, setPreventAni] = useState(false);
  const [scrolling, setScrolling] = useState(true);
  const postsNumber = useSelector((state) => state.postsNumber?.value);
  const [headerTitle, setHeaderTitle] = useState("ZAEYON LOG");

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

  const onClickCategoryItem = (category) => {
    router.push(`/${category.key}`);
    if (headerEvent === "shrink") {
      setHeaderEvent("expand");
      localStorage.setItem("headerEvent", "expand");
    }
  };

  const createScrollStopListener = (element, callback, timeout) => {
    var handle = null;
    const onScrollEvent = () => {
      setScrolling(true);
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

        if (window.scrollY > 0.21 * window.innerHeight && postTitle) {
          setHeaderTitle(postTitle);
        } else if (postTitle) {
          setHeaderTitle("ZAEYON LOG");
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
    createScrollStopListener(window, () => {
      console.log("stop scroll");
      setScrolling(false);
    });
  });

  return (
    <Container>
      <Menu
        onClickCategoryItem={onClickCategoryItem}
        scrolling={scrolling}
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
          headerTitle={headerTitle}
        />
        <ContentContainer>{children}</ContentContainer>
      </ExceptMenuContainer>
    </Container>
  );
};

export default Layout;
