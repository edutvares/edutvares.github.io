import * as S from "./styled";

import { Html5 } from "@styled-icons/fa-brands/Html5";
import { Css3Alt } from "@styled-icons/fa-brands/Css3Alt";
import { Js } from "@styled-icons/fa-brands/Js";

const Card = ({ data }) => {
  return (
    <S.Container
      href="#"
      backgroundLogo={data.logo}
      primaryColor={data.primaryColor}
      secundaryColor={data.secundaryColor}
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
      <img src={data.frame} />
    </S.Container>
  );
};

export default Card;
