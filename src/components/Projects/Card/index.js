import * as S from "./styled";

import { Html5 } from "@styled-icons/fa-brands/Html5";
import { Css3Alt } from "@styled-icons/fa-brands/Css3Alt";
import { Js } from "@styled-icons/fa-brands/Js";

import logoCross from "../images/cross-logo.png";
import siteImage from "../images/cross.png";

const Card = () => {
  return (
    <S.Container href="#" backgroundLogo={logoCross}>
      <S.TextSection>
        <S.Text>
          <h2>CROSS Projetos</h2>
          <p>Projetado e desenvolvido na QRV</p>
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
      <img src={siteImage} />
    </S.Container>
  );
};

export default Card;
