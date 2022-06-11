import { useState } from 'react';
import styled from 'styled-components';
import { TabBarProps, TwoStringProps } from '../types';

const TabBar = ({ menu, checkList }: TabBarProps) => {
  const [menuCheck, setMenuCheck] = useState<number>(0);
  const [check, setCheck] = useState<string>(menu[0].option);

  const menuList = menu.map((i: TwoStringProps, index: number) => (
    <StyledMenuTitle
      key={i.option}
      id={i.option}
      check={check}
      count={menu.length}
      onClick={(e) => clickFunc(e, index)}
    >
      {i.title}
    </StyledMenuTitle>
  ));

  const clickFunc = (e: React.BaseSyntheticEvent<MouseEvent>, index: number) => {
    setMenuCheck(index);
    setCheck(e.target.id);
  };
  return (
    <>
      <div className="hbox space-evenly w(100%) pt(1.5rem)">{menuList}</div>
      {checkList[menuCheck]}
    </>
  );
};

export default TabBar;

const StyledMenuTitle = styled.li<{ check?: string; count: number }>`
  width: ${({ count }) => 100 / count}%;
  font-size: 0.9rem;
  padding-bottom: 1rem;
  justify-content: center;
  text-align: center;
  font-family: 'Pretendard-Regular';
  display: flex;
  color: lightgray;
  &:hover {
    cursor: pointer;
  }
  &#${({ check }) => check} {
    font-weight: bold;
    color: #2ac1bc;
    border-bottom: 2px solid #2ac1bc;
  }
`;
