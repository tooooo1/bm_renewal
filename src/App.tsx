import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home, Login, Delivery, Bmart, FindID, FindPW, About, Food } from './pages';
import Notice from './pages/Notice';
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
        <Route path="/findid" element={<FindID />} />
        <Route path="/findpw" element={<FindPW />} />
        <Route path="/about" element={<About />} />
        <Route path="/food" element={<Food />} />
        <Route path="/notice" element={<Notice />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
