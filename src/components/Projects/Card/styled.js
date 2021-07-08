import styled from "styled-components";
import media from "styled-media-query";

export const Container = styled.a`
  width: 100%;
  margin-top: 40px;
  overflow: hidden;

  border-radius: 30px;

  display: flex;
  justify-content: space-between;

  color: var(--secundary-color);
  text-decoration: none;

  background-size: contain;

  &:nth-child(1) {
    margin: 0;
  }

  img {
    margin: 50px 50px 0 0;
    width: 40%;
    height: auto;
  }

  ${media.lessThan("small")`
    flex-direction: column;
    border-radius: 10px;

    img {
      width: 90%;
      margin: 0 auto;
    }
  `}
`;

export const TextSection = styled.div`
  padding: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  ${media.lessThan("small")`
    padding: 5%;
  `}
`;

export const Text = styled.div`
  h2 {
    font-size: clamp(1.6rem, 3.5vw, 2rem);
    font-weight: 900;
  }

  p {
    font-size: clamp(0.8rem, 2vw, 2rem);
  }
`;

export const Icons = styled.ul`
  display: flex;
  list-style: none;
  color: var(--transparent-secundary-color);

  ${media.lessThan("small")`
    li {
      width: 20px;
      margin-left: 10px;
    }

    svg {
      width: 100%;
    }
  `}
`;
