import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home, Login, Delivery, Bmart, Find } from './pages';
import { Header, Footer } from './components';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

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

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/delivery" element={<Delivery />} />
        <Route path="/bmart" element={<Bmart />} />
        <Route path="/find" element={<Find />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
