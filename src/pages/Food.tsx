import { useCallback, useState } from 'react';
import Sidebar from '../components/Sidebar';
import { Goods } from '../components';
import TabBar from '../components/TabBar';
import useItems from '../hooks/useItems';
import { GoodsProps, TwoStringProps, TabContents } from '../types';
import styled, { keyframes } from 'styled-components';

const menu: TwoStringProps[] = [
  { title: '공지사항', option: 'announcement' },
  { title: 'FAQ', option: 'faq' },
  { title: '1:1 문의', option: 'inquiry' },
];

const checkList: TabContents = {
  0: <div>공지사항</div>,
  1: <div>FAQ</div>,
  2: <div>1:1 문의</div>,
};

const Food = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const goodsItem = useItems();

  const handleCartOpen = useCallback((isOpen: boolean) => {
    setIsCartOpen(isOpen);
  }, []);

  const cart = useCallback(() => {
    console.log('hi');
    setIsCartOpen(!isCartOpen);
  }, []);

  return (
    <div>
      {isCartOpen && <StyledDarkBody isOpen={isCartOpen} />}
      <Sidebar isOpen={isCartOpen} onSidebarOpen={handleCartOpen} />
      <div className="vpack w(70%) m(auto) p(100/0)">
        <div className="hbox flex-wrap">
          {goodsItem.map((option: GoodsProps) => (
            <Goods key={option.name} onClick={cart} {...option} />
          ))}
        </div>
        <TabBar menu={menu} checkList={checkList} />
      </div>
    </div>
  );
};

export default Food;

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
