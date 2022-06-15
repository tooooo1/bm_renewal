import { useEffect, useRef } from 'react';
// import { useCookies } from 'react-cookie';
import { useRecoilValue, useRecoilState } from 'recoil';
import styled from 'styled-components';
// import CartTotal from './CartTotal';
import { lineItemState } from '../../atoms';
import { totalPriceState, deliveryChargeState } from '../../selectors';
import { GoodsProps, SidebarProps } from '../../types';
import CartItem from './CartItem';

const SideBar = ({ onSidebarOpen, isOpen }: SidebarProps) => {
  const cartItem = useRecoilValue(lineItemState);
  const totalPrice = useRecoilValue(totalPriceState);
  // const deliveryCharge = useRecoilValue(deliveryChargeState);
  // const [cookies, setCookie, removeCookie] = useCookies([
  //   'AccessToken',
  //   'RefreshToken',
  //   'UserInfo',
  // ]);
  const sidebarRef = useRef(null);

  const saveToLocalStorage = () => {
    localStorage.setItem('cartState', JSON.stringify(cartItem));
  };

  const onClickOutside = (event: any) => {
    if (sidebarRef.current && !(sidebarRef.current as any).contains(event.target)) {
      // TODO: change any type
      return onSidebarOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', onClickOutside, true);
    return () => {
      document.removeEventListener('click', onClickOutside, true);
    };
  });

  // const userName = cookies.AccessToken
  //   ? cookies['UserInfo']['last_name'] + cookies['UserInfo']['first_name']
  //   : null;

  return (
    <SideBarWrapper
      className="vbox space-between fixed top(0) right(0) w(40%) h(100%) z(1) bg(white) cursor(auto) transition(.5s)"
      ref={sidebarRef}
      isOpen={isOpen}
    >
      <div className="h(80%) scroll">
        <div className="hbox space-between p(25) font-family(BMHANNAPro) font(2rem) c(black)">
          장바구니
          <button onClick={() => onSidebarOpen(false)}>
            <Close />
          </button>
        </div>
        {cartItem.map((option: GoodsProps, i) => (
          <CartItem key={option.name ? option.name.toString() : i} {...option} />
        ))}
      </div>
      <div className="vbox bt(1/rgb(229,231,235)) p(1.5rem)">
        <div className="hbox space-between pb(2rem) pr(1.5rem)">
          <p>결제금액</p>
          <p>{totalPrice}원</p>
        </div>
        <button
          className="pack bg(#2ac1bc) w(50%) m(0/auto) p(1rem) c(black) r(8)"
          onClick={saveToLocalStorage}
        >
          결제하기
        </button>
      </div>
    </SideBarWrapper>
  );
};

export default SideBar;

const Close = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M18 6L6 18"
      stroke="#303030"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6 6L18 18"
      stroke="#303030"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const SideBarWrapper = styled.aside<{ isOpen: boolean }>`
  transform: ${(props) => (props.isOpen ? 'translateX(0)' : 'translateX(100%)')};
  visibility: ${(props) => (props.isOpen ? 'visible' : 'hidden')};
`;
