import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *,
  *:before,
  *:after {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    font-family: 'Arial';
}

html, body {
    max-width: 100vw;
}
`;