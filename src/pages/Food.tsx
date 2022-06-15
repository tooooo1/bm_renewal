import { useCallback, useState } from 'react';
import { Goods, TabBar, SideBar } from '../components';
import useItems from '@hooks/useItems';
import { GoodsProps, TwoStringProps, TabContents } from '../types';
import styled, { keyframes } from 'styled-components';
import { useRecoilState } from 'recoil';
import { lineItemState } from '../atoms';

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
  const [cartList, setCartList] = useRecoilState(lineItemState);

  const handleCartOpen = useCallback((isOpen: boolean) => {
    setIsCartOpen(isOpen);
  }, []);

  const handleCart = useCallback(() => {
    setIsCartOpen(!isCartOpen);

    setCartList((prev) => [
      ...prev,
      {
        id: 1,
        imgSrc: 'hi',
        name: 'string',
        price: 100,
        count: 1,
      },
    ]);

    console.log(cartList);
  }, []);

  return (
    <div>
      {isCartOpen && <StyledDarkBody isOpen={isCartOpen} />}
      <SideBar isOpen={isCartOpen} onSidebarOpen={handleCartOpen} />
      <div className="vpack w(70%) m(auto) p(100/0)">
        <div className="hbox flex-wrap">
          {goodsItem.map((option: GoodsProps) => (
            <Goods key={option.name} onClick={handleCart} {...option} />
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
