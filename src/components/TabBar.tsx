import { useState } from 'react';
import PALETTE from '../constants/palette';
import styled from 'styled-components';
import { TabBarProps } from '../types';

const TabBar = ({ menu, checkList }: TabBarProps) => {
  const [menuCheck, setMenuCheck] = useState<number>(0);
  const [check, setCheck] = useState<string>(menu[0].option);

  const menuList = menu.map((i: any, index: number) => (
    <StyledMenuTitle
      key={i.option}
      id={i.option}
      check={check}
      count={menu.length}
      onClick={(e) => clickFunc(e, index)}
    >
      {i.name}
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

// border-top: 4px solid ${PALETTE.LIGHT_010};

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
    color: ${PALETTE.PRI_MAIN};
    border-bottom: 2px solid ${PALETTE.PRI_MAIN};
  }
`;
