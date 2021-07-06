import * as S from "./styled";
import backgroundImage from "./images/background.png";
import arrowImage from "./images/arrow.svg";

const Welcome = () => {
  return (
    <>
      <S.Container backgroundImage={backgroundImage}>
        <S.Wrapper>
          <img src={arrowImage} />

          <S.Text>
            Olá<span>,</span>
            <br />
            Eu sou
            <br />
            Eduardo
          </S.Text>
        </S.Wrapper>
      </S.Container>
    </>
  );
};

export default Welcome;
