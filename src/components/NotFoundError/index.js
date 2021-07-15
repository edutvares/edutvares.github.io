import { Link } from "react-router-dom";

import * as S from "./styled";
import Eyes from "./Eyes";

const NotFoundError = () => {
  return (
    <S.Container>
      <span>404</span>
      <Eyes />
      <p>
        Se você quer saber,
        <br />
        ele foi por ali.
      </p>
      <span>
        <Link to="/">caminho</Link> 👈🏻 👉🏻 <Link to="/">caminho</Link>
      </span>
    </S.Container>
  );
};

export default NotFoundError;
