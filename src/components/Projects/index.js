import { useRef, useEffect } from "react";
import * as S from "./styled";
import Card from "./Card";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import data from "./data.js";

const Projects = () => {
  gsap.registerPlugin(ScrollTrigger);

  const projectsRef = useRef(null);

  useEffect(() => {
    const cardsRef = [...projectsRef.current.children];
    cardsRef.map((project) => {
      gsap.from(project, {
        scrollTrigger: project,
        y: 100,
        opacity: 0,
        delay: 0.5,
        duration: 0.7,
      });
    });
  }, []);

  return (
    <S.Container>
      <S.Wrapper>
        <h2>
          Parece que isso
          <br /> é minha culpa <span>.</span>
        </h2>
        <div ref={projectsRef}>
          {data.map((item, key) => (
            <Card key={key} data={item} />
          ))}
        </div>
      </S.Wrapper>
    </S.Container>
  );
};

export default Projects;
