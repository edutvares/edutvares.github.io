import styled from "styled-components";
import media from "styled-media-query";

export const Container = styled.section`
  width: 100%;
  min-height: 85vh;
  padding: 10vh 0;

  background: url("${(props) => props.backgroundImage}");
  background-size: 45vw;
  background-repeat: no-repeat;

  ${media.lessThan("small")`
    background-size: 100vw;
    display: flex;
    align-items: flex-end;
  `}
`;

export const Wrapper = styled.div`
  width: 90vw;
  margin: 0 auto;
  max-width: 1220px;

  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  ${media.lessThan("small")`
    img {
      display: none;
    }
  `}
`;

export const Text = styled.h2`
  font-size: clamp(4rem, 11vw, 10rem);
  font-weight: 900;

  & > span {
    color: var(--terciary-color);
  }
`;
