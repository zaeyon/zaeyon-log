import { useState, useEffect, useLayoutEffect, useCallback } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import Header from "./Header";
import Menu from "./Menu";
import { setVisibleMenu } from "../features/visibleMenuSlice";
import {setIsMobile} from '../features/isMobileSlice';

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

  @media (max-width: 470px) {
    padding-top: 6rem;
  }
`;

interface props {
  children: any,
  postTitle?: string,
  isMobile: boolean,
}

interface categoryObj {
  key: string,
}

const Layout: React.FC<props> = ({ children, postTitle, isMobile }) => {
  const [headerEvent, setHeaderEvent] = useState("expand");
  const [preventAni, setPreventAni] = useState(false);
  const [scrolling, setScrolling] = useState(true);
  const postsNumber = useSelector((state: any) => state.postsNumber?.value);
  const [headerTitle, setHeaderTitle] = useState("ZAEYON LOG");

  const router = useRouter();

  const dispatch = useDispatch();
  const visibleMenu = useSelector((state: any) => state.visibleMenu.value);


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

  const onClickCategoryItem = (category: categoryObj) => {
    router.push(`/${category.key}`);
    if (headerEvent === "shrink") {
      setHeaderEvent("expand");
      localStorage.setItem("headerEvent", "expand");
    }
  };

  const onClickMobileCategoryItem = useCallback((category: categoryObj) => {
    router.push(`/${category.key}`);
    dispatch(setVisibleMenu(false));
  }, [router])

  const onClickAboutCategoryItem = useCallback(() => {
    router.push(`/about`);
    dispatch(setVisibleMenu(false));
  }, [router]);

  const createScrollStopListener = (element: any, callback: any) => {
    var handle: any = null;
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
      handle = setTimeout(callback, 200);
    };
    element.addEventListener("scroll", onScrollEvent);

    return function () {
      element.removeEventListener("scroll", onScrollEvent);
    };
  };

  useEffect(() => {
    createScrollStopListener(window, () => {
      setScrolling(false);
    });
  });

  return (
    <Container>
      <Menu
      isMobile={isMobile}
        onClickCategoryItem={onClickCategoryItem}
        onClickMobileCategoryItem={onClickMobileCategoryItem}
        onClickAboutCategoryItem={onClickAboutCategoryItem}
        scrolling={scrolling}
        postsNumber={postsNumber}
        headerEvent={headerEvent}
        visibleMenu={visibleMenu}
      />
      <ExceptMenuContainer onClick={onClickExceptMenu}>
        <Header
          isMobile={isMobile}
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
