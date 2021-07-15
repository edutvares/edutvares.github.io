import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  text-align: center;
  font-size: 3em;

  span,
  a {
    color: var(--terciary-color);
  }

  a {
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
`;
