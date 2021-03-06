export type TabContents = Record<number, JSX.Element>;

export type TwoStringProps = {
  title: string;
  option: string;
};

export type TabBarProps = {
  menu: TwoStringProps[];
  checkList: TabContents;
};

export interface discountProps {
  middleTitle: string;
  title: string;
  substr1: string;
  substr2: string;
}

export type SidebarProps = {
  onSidebarOpen: (isOpen: boolean) => void;
  isOpen: boolean;
};

export type GoodsProps = {
  id: number;
  imgSrc: string;
  name: string;
  price: number;
  count: number;
  totalPrice?: number;
  onClick?: React.MouseEventHandler<HTMLDivElement> | undefined;
};
