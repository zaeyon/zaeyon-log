import React, {useState, useEffect, useLayoutEffect} from 'react'; 
import Image from 'next/image'
import style from './styles/navbar.module.css';
import {animated, useSpring} from '@react-spring/web'; 
import MenuIconPNG from "../../public/images/icons/hamburger.png";


interface props {
 onClickMenu: () => void,
 headerEvent: string,
 onClickHeaderLogo: () => void,
 headerTitle: string,
 isMobile: boolean,
 keyword?: string,
}

const Navbar: React.FC<props> = ({onClickMenu, headerEvent, onClickHeaderLogo, headerTitle, isMobile, keyword}) => {
    const [headerHeight, setHeaderHeight] = useState("6.5rem");

    const [springs, headerApi] = useSpring(() => ({
        config: {
            mass: 1.6,
            friction: 30,
            tension: 600,
        }
    }));


  useEffect(() => {
    if (headerEvent === "shrink") {
      headerApi.start({
        from: {
          height: "6.5rem",
        },
        to: {
          height: "3.8rem",
        },
      });
    } else if (headerEvent === "expand" && headerHeight === "3.8rem") {
      headerApi.start({
        from: {
          height: "3.8rem",
        },
        to: {
          height: "6.5rem",
        },
      });
    } else if (headerEvent === "default") {
      headerApi.start({
        from: {
          height: "6.5rem",
        },
        to: {
          height: "6.5rem",
        },
      });
    }
  }, [headerEvent, headerHeight, headerApi]);


  useLayoutEffect(() => {
    if (
      localStorage.getItem("headerEvent") === "expand" &&
      window.scrollY < 0.12 * window.innerHeight
    ) {
      setHeaderHeight("6.5rem");
    } else if (
      localStorage.getItem("headerEvent") === "shrink" &&
      window.scrollY > 0.12 * window.innerHeight
    ) {
      setHeaderHeight("3.8rem");
    }
  }, [headerHeight, headerEvent]);

  if(!isMobile) {
    return (
        <animated.div
        className={style.container}
        style={{
            height: headerHeight,
            ...springs,
        }}
        >
            <div className={style.menuIconWrapper}
            onClick={() => onClickMenu()}>
                <Image className={style.menuIconImg}
                src={MenuIconPNG}
                alt={"menu icon"}
                />
            </div>
            <div 
            style={headerTitle === "ZAEYON LOG" ? {fontSize: "42px"} : {fontSize: "37px"}}
            className={style.titleWrapper} 
            onClick={() => onClickHeaderLogo()}>
                {headerTitle === "ZAEYON LOG" ? "ZAEYON LOG" : `[${keyword}] ${headerTitle}`}
            </div>
            <div className={style.emptyWrapper}>
            </div>
        </animated.div>
    )
  } else {
    return (
        <div
        className={style.container}
        style={{
            height: "4.5rem"
        }}>
<div className={style.menuIconWrapper}
            onClick={() => onClickMenu()}>
                <Image className={style.mobileMenuIconImg}
                src={MenuIconPNG}
                alt={"menu icon"}
                />
            </div>
            <div 
            style={headerTitle === "ZAEYON LOG" ? {fontSize: "37px"} : {fontSize: "32px"}}
            className={style.titleWrapper} 
            onClick={() => onClickHeaderLogo()}>
                {headerTitle}
            </div>
            <div className={style.mobileEmptyWrapper}>
            </div>
        </div>
    )
  }

}

export default React.memo(Navbar);