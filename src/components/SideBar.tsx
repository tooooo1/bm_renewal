import { SidebarProps } from '../types';

const Sidebar = (props: SidebarProps) => {
  return <div className="fixed t(0) r(0) h(100%) bc(white)">{props.isOpen}하이</div>;
};

export default Sidebar;
