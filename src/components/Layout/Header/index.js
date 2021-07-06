import * as S from "./styled";

const Header = () => {
  return (
    <S.Container>
      <S.Wrapper>
        <S.Logo>
          <span>{"<"}</span> Edu T. <span>{"/>"}</span>
        </S.Logo>
      </S.Wrapper>
    </S.Container>
  );
};

export default Header;
