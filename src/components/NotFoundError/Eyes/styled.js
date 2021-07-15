import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 25px;
  margin: 50px 0;
`;

export const Eye = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background: var(--secundary-color);
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 35px;
    transform: translate(-50%, -50%);
    width: 45px;
    height: 45px;
    border-radius: 50%;
    background: var(--primary-color);
  }
`;
