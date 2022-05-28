import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import './assets/font/font.css';

const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
    outline: none;
    box-sizing: border-box;
  }
  body {
    font-family: 'Pretendard-Medium', 'Apple SD Gothic Neo', 'Noto Sans KR', sans-serif;
  }
  ::selection {
    background-color: #2ac1bc;
    color: white;
  }
`;

export default GlobalStyle;
