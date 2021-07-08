import { useEffect, useRef } from "react";
import * as S from "./styled";
import gsap from "gsap";

const Splash = () => {
  const splashRef = useRef(null);

  useEffect(() => {
    const contentRef = [...splashRef.current.children];
    const tl = gsap.timeline({ delay: 1.5 });
    tl.to(contentRef, {
      opacity: 0,
    }).to(splashRef.current, {
      width: 0,
    });
  }, []);

  return (
    <S.Container ref={splashRef}>
      <svg
        width="127"
        height="94"
        viewBox="0 0 127 94"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M63.6862 54.4177H29.3644L25.4511 76.6787H66.0598L63.0446 93.9999H0.495667L16.6622 0.593506H79.3394L76.3242 17.9789H35.6514L32.1871 37.6738H66.573L63.6862 54.4177Z"
          fill="#FF4A57"
        />
        <path
          d="M123.357 17.979H96.1564L83.0051 94H61.0007L74.2161 17.979L67.631 17.9789L70.7103 0.593506L126.372 0.593569L123.357 17.979Z"
          fill="#ecf1fd"
        />
      </svg>
      <S.Load />
    </S.Container>
  );
};
export default Splash;
