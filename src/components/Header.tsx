import cartPNG from '@assets/image/cart.png';
import logo from '@assets/image/logo2.png';
import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { TwoStringProps } from '../types';
import Sidebar from './SideBar';

const Header = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const navigate = useNavigate();
  const menu = [
    { title: '배달', option: 'delivery' },
    { title: 'B마트', option: 'bmart' },
    { title: '이용방법', option: 'delivery' },
    { title: '새소식', option: 'delivery' },
    { title: '가맹점', option: 'delivery' },
  ];

  const handleCartOpen = useCallback((isOpen: boolean) => {
    setIsCartOpen(isOpen);
  }, []);

  const cart = useCallback(() => {
    setIsCartOpen(!isCartOpen);
  }, []);

  const logout = () => {
    navigate('/');
    localStorage.clear();
  };

  return (
    <div className="m(auto) w(80%) p(2rem)">
      {isCartOpen && <StyledDarkBody isOpen={isCartOpen} />}
      <div className="hbox space-between">
        <div className="hbox">
          <img
            onClick={() => navigate('/')}
            className="hover:pointer(cursor)"
            src={logo}
            width={150}
            alt="logo"
          />
          <ul className="hbox ml(4vw) font(18) gap(3vw)">
            {menu.map(({ title, option }: TwoStringProps) => (
              <li
                key={title}
                onClick={() => {
                  navigate(`/${option}`);
                }}
                className="hover:pointer(cursor)+c(#2ac1bc)"
              >
                {title}
              </li>
            ))}
          </ul>
        </div>
        <div className="hbox gap(10) c(gray) hover:pointer(cursor)">
          <input
            placeholder="찾는 메뉴가 뭐예요?"
            className="bg(#f1f1f1) b(none) r(15) p(10/50/10/30) focus:outline(none)
            bg-image(url('/src/assets/image/search.png'))
            background-repeat(no-repeat)
            background-position(95%)
            background-size(25px)
            pointer
            "
          />
          <img
            onClick={cart}
            className="hover:pointer(cursor) m(0/1rem)"
            src={cartPNG}
            width={25}
            alt="logo"
          />
          <Sidebar isOpen={isCartOpen} onSidebarOpen={handleCartOpen} />
          {!localStorage.id ? (
            <div className="b(2) p(4/12) r(16)" onClick={() => navigate('/login')}>
              로그인
            </div>
          ) : (
            <div className="b(2) p(4/12) r(16)" onClick={logout}>
              로그아웃
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;

const colorAnimation = keyframes`
  0% {
    background: transparent;
  }

  100% {
    background: rgba(38, 38, 38, 0.3);
  }
`;

const StyledDarkBody = styled.div<{ isOpen: boolean }>`
  position: fixed;
  padding: 0;
  margin: 0;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  animation: 0.5s ${colorAnimation} forwards;
`;
