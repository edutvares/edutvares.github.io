import { useEffect, useRef } from "react";
import * as S from "./styled";

const Eyes = () => {
  const eyesContainerRef = useRef(null);
  let eyesRef = [];

  useEffect(() => {
    eyesRef = [...eyesContainerRef.current.children];
    document.querySelector("body").addEventListener("mousemove", mouseMove);
  }, []);

  const mouseMove = (e) => {
    eyesRef.map((eye) => {
      const x = eye.getBoundingClientRect().left;
      const y = eye.getBoundingClientRect().top;

      let radian = Math.atan2(e.pageX - x, e.pageY - y);
      let rotation = radian * (180 / Math.PI) * -1 + 260;
      eye.style.transform = `rotate(${rotation}deg)`;
    });
  };

  return (
    <S.Container ref={eyesContainerRef}>
      <S.Eye />
      <S.Eye />
    </S.Container>
  );
};

export default Eyes;
