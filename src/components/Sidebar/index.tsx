import { useEffect, useRef } from 'react';
import OptionItem from './OptionItem';
import { Option, SidebarProps } from '../../types';
import { useCookies } from 'react-cookie';
import styled from 'styled-components';
import useItems from '../../hooks/useItems';

const Sidebar = ({ onSidebarOpen, isOpen }: SidebarProps) => {
  const tempItems = useItems();
  const [cookies, setCookie, removeCookie] = useCookies([
    'AccessToken',
    'RefreshToken',
    'UserInfo',
  ]);
  const sidebarRef = useRef(null);

  const saveToLocalStorage = () => {
    localStorage.setItem('cartState', JSON.stringify(tempItems));
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

  const connection: Option[] = [
    {
      optionName: '로그아웃',
      onClick: () => {
        removeCookie('AccessToken');
        removeCookie('RefreshToken');
        removeCookie('UserInfo');
        onSidebarOpen(false);
      },
    },
  ];

  return (
    <SideBarWrapper
      className="fixed top(0) right(0) w(80%) h(100%) z(1) bg(white) cursor(auto) transition(.5s)"
      ref={sidebarRef}
      isOpen={isOpen}
    >
      <div className="hbox space-between p(25) font-family(BMHANNAPro) font(2rem) c(black)">
        장바구니
        <button onClick={() => onSidebarOpen(false)}>
          <Close />
        </button>
      </div>
      {connection.map((option) => (
        <OptionItem key={option.toString()} isShownAlways={option.isShownAlways}>
          {option.optionName}
        </OptionItem>
      ))}
      <div className="flex bt(1/rgb(229,231,235)) ">
        <div className="hbox justify-between">
          <p>결제금액</p>
          <p className="">
            10000원
            {/* {tempItems.reduce((acc, cur) => cur.price * cur.count + acc, 0).toLocaleString() + '원'} */}
          </p>
        </div>
        <p className="pack" onClick={saveToLocalStorage}>
          결제하기
        </p>
      </div>
    </SideBarWrapper>
  );
};

export default Sidebar;

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
