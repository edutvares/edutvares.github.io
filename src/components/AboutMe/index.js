import { useEffect, useRef } from "react";
import * as S from "./styled";
import profileImage from "./images/profile.png";
import { ReactLogo } from "@styled-icons/fa-brands/ReactLogo";
import { InstagramSquare } from "@styled-icons/fa-brands/InstagramSquare";
import marker from "./images/marker.svg";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const AboutMe = () => {
  gsap.registerPlugin(ScrollTrigger);

  const reactLogoRef = useRef(null);

  useEffect(() => {
    gsap.to(reactLogoRef.current, {
      scrollTrigger: {
        trigger: reactLogoRef.current,
        scrub: 1,
      },
      y: -500,
      rotation: 90,
      transformOrigin: "50% 50%",
    });
  }, []);

  return (
    <S.Container>
      <S.Wrapper>
        <S.TextSection>
          <h2>
            Quem sou <span>.</span>
          </h2>
          <h3>Eduardo Tavares</h3>
          <p>
            Sou graduando em Sistemas de Informação na UFS e trabalho com design
            e desenvolvimento front-end há 2 anos. Nesse tempo me tornei
            fundador da QRV e desde então procuro desenvolver projetos que mudem
            a forma das pessoas verem a web.
          </p>
          <S.SocialLinks>
            <img src={marker} alt="icone react" />
            <a href="https://www.instagram.com/edu_tvares/">
              <InstagramSquare size="40" />
            </a>
          </S.SocialLinks>
        </S.TextSection>
        <S.ImageSection>
          <img src={profileImage} alt="Foto de perfil" />
          <S.RotatingImage ref={reactLogoRef}>
            <ReactLogo />
          </S.RotatingImage>
        </S.ImageSection>
      </S.Wrapper>
    </S.Container>
  );
};

export default AboutMe;
