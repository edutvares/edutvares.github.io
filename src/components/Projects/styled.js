import styled from "styled-components";

export const Container = styled.section`
  width: 100%;

  padding-bottom: 100px;
`;

export const Wrapper = styled.div`
  width: 90vw;
  margin: 0 auto;
  max-width: 1220px;

  span {
    color: var(--terciary-color);
  }

  h2 {
    font-size: clamp(2.5rem, 6vw, 7rem);
    margin-bottom: 50px;
  }
`;
