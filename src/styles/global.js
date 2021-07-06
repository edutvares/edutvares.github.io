import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

  body, input, button {
    font: 14px Roboto, sans-serif;
  }

  body {
    background: var(--primary-color);
    color: var(--secundary-color)
  }

  button {
    cursor: pointer;
  }

  :root {
    --primary-color: #23263b;
    --secundary-color: #ecf1fd;
    --terciary-color: #ff4a57;
    --transparent-primary-color: rgba(35,38,59,.5);
    --transparent-secundary-color: rgba(236, 241, 253, 0.8);
  }
`;
