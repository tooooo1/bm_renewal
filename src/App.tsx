import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import { Home } from "./pages";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
    outline: none;
    box-sizing: border-box;
  }
`;

const App = () => (
  <BrowserRouter>
    <GlobalStyle />
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  </BrowserRouter>
);

export default App;