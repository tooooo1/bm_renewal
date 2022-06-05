export type SidebarProps = {
  onSidebarOpen: (isOpen: boolean) => void;
  isOpen: boolean;
};

const Sidebar = ({ onSidebarOpen, isOpen }: SidebarProps) => {
  return <div className="fixed t(0) r(0) h(100%) bc(white)">하이</div>;
};

export default Sidebar;
