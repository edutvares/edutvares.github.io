import * as S from "./styled";
import Card from "./Card";

const Projects = () => {
  return (
    <S.Container>
      <S.Wrapper>
        <h2>
          Parece que isso
          <br /> é minha culpa <span>.</span>
        </h2>
        <Card />
        <Card />
        <Card />
        <Card />
      </S.Wrapper>
    </S.Container>
  );
};

export default Projects;
