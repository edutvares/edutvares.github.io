import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: 10vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;

  background: var(--transparent-primary-color);
  backdrop-filter: blur(10px);
`;

export const Wrapper = styled.div`
  width: 90vw;
  height: 100%;
  margin: 0 auto;
  max-width: 1220px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.h1`
  & > span {
    color: var(--terciary-color);
  }
`;
