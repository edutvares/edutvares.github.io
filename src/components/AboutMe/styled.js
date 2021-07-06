import styled from "styled-components";
import media from "styled-media-query";

export const Container = styled.section`
  width: 100%;

  padding-bottom: 100px;
`;

export const Wrapper = styled.div`
  width: 90vw;
  margin: 0 auto;
  max-width: 1220px;

  display: flex;
  justify-content: space-between;

  ${media.lessThan("small")`
    display: flex;
    flex-direction: column;
  `}
`;

export const TextSection = styled.div`
  max-width: 50vw;
  padding-top: 50px;

  span {
    color: var(--terciary-color);
  }

  h2 {
    font-size: clamp(2.5rem, 6vw, 7rem);
    margin-bottom: 30px;
  }

  h3 {
    font-size: clamp(1rem, 2vw, 2rem);
    margin-bottom: 20px;
  }

  p {
    font-size: clamp(0.8rem, 1.4vw, 2rem);
    font-weight: 400;
    padding-right: 100px;
  }

  ${media.lessThan("small")`
    max-width: 100%;
  `}
`;

export const SocialLinks = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: flex-end;

  img {
    margin-bottom: 10px;
  }

  a {
    margin-left: 20px;
    color: var(--secundary-color);
    transition: all 300ms ease-in-out;
  }

  a:hover {
    color: var(--terciary-color);
  }
`;

export const ImageSection = styled.div`
  position: relative;

  ${media.lessThan("medium")`
    width: 40%;
    display: flex;
    align-items: center;

    img {
      width: 100%;
    }
  `}

  ${media.lessThan("small")`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 50px;

    img {
      width: 70%;
    }
  `}
`;

export const RotatingImage = styled.div`
  position: absolute;
  width: 200px;
  bottom: -50px;
  left: -150px;
  color: var(--terciary-color);
`;
