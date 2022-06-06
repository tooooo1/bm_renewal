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

export type SidebarProps = {
  onSidebarOpen: (isOpen: boolean) => void;
  isOpen: boolean;
};

export type OptionListProps = {
  children: Children;
  onSidebarOpen: (isOpen: boolean) => void;
  isOpen: boolean;
};

export type OptionItemProps = {
  children: Children;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  isShownAlways?: boolean;
};

export type Option = {
  readonly optionName: string;
  readonly isShownAlways?: boolean;
  readonly onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

export type Children = React.ReactNode;
