export type TabContents = Record<number, JSX.Element>;

export type IMenu = {
  name: string;
  option: string;
};

export type TabBarProps = {
  menu: IMenu[];
  checkList: TabContents;
};

export interface discountProps {
  middleTitle: string;
  title: string;
  substr1: string;
  substr2: string;
}

export interface SidebarProps {
  onSidebarOpen: (isOpen: boolean) => void;
  isOpen: boolean;
}
