import { useRef, useEffect } from "react";
import * as S from "./styled";

import { Html5 } from "@styled-icons/fa-brands/Html5";
import { Css3Alt } from "@styled-icons/fa-brands/Css3Alt";
import { Js } from "@styled-icons/fa-brands/Js";

import gsap from "gsap";

const Card = ({ data }) => {
  const cardRef = useRef(null);

  const hoverAnimation = gsap.timeline({ paused: true });

  useEffect(() => {
    const text = cardRef.current.children[0];
    const frameImage = cardRef.current.children[1];

    const backgroundDefault = `url("${data.logo}") no-repeat center,
    linear-gradient(
      110.09deg,
      rgba(39, 39, 39, 0.38) 0%,
      ${data.secundaryColor} 70.83%,
      ${data.primaryColor} 70.84%
    )`;

    const backgroundHover = `url("${data.logo}") no-repeat center,
    linear-gradient(
      110.09deg,
      rgba(39, 39, 39, 0.38) 0%,
      ${data.secundaryColor} 65.83%,
      ${data.primaryColor} 65.84%
    )`;

    hoverAnimation
      .to(cardRef.current, { background: backgroundHover })
      .to([frameImage, text], { scale: 1.02 }, "<");
    gsap.set(cardRef.current, { background: backgroundDefault });
  }, []);

  return (
    <S.Container
      href={data.href}
      ref={cardRef}
      onMouseEnter={() => hoverAnimation.play()}
      onMouseLeave={() => hoverAnimation.reverse()}
    >
      <S.TextSection>
        <S.Text>
          <h2>{data.title}</h2>
          <p>{data.description}</p>
        </S.Text>
        <S.Icons>
          <li>
            <Html5 size="50" />
          </li>
          <li>
            <Css3Alt size="50" />
          </li>
          <li>
            <Js size="50" />
          </li>
        </S.Icons>
      </S.TextSection>
      <img
        src={data.frame}
        alt={`imagem de demonstração da interface ${data.title}`}
      />
    </S.Container>
  );
};

export default Card;
