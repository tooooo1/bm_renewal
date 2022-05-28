export type TabContents = Record<number, JSX.Element>;

export type IMenu = {
  name: string;
  option: string;
};

export type TabBarProps = {
  menu: IMenu[];
  checkList: TabContents;
};
