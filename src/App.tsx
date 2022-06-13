import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { Home, Login, Delivery, Bmart, FindID, FindPW, About, Food, Cart, NotFound } from './pages';
import Notice from './pages/Notice';
import { Header, Footer } from './components';
import { RecoilRoot } from 'recoil';

const App = () => {
  return (
    <BrowserRouter>
      <RecoilRoot>
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
          <Route path="/cart" element={<Cart />} />
          <Route path="/404" element={<NotFound />} />
          <Route path="/*" element={<Navigate replace to="/404" />} />
        </Routes>
        <Footer />
      </RecoilRoot>
    </BrowserRouter>
  );
};

export default App;
