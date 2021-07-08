import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: var(--primary-color);
  transition: all 1s ease-in-out;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  z-index: 3;

  &::after {
    content: "";
    position: absolute;
    right: -20%;
    background: var(--terciary-color);
    width: 20%;
    height: 100%;
  }
`;

export const Load = styled.div`
  width: 30px;
  height: 30px;
  margin-top: 30px;
  border: 1px solid var(--transparent-secundary-color);
  border-radius: 50%;
  position: relative;
  animation: ${rotate} 2s linear infinite;

  &::after {
    content: "";
    width: 10px;
    height: 10px;
    position: absolute;
    top: 0;
    left: 50%;
    background: var(--terciary-color);
    border-radius: 50%;
    transform: translate(-5px, -50%);
  }
`;
