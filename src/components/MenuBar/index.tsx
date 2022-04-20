const MenuBar = () => {
  const menu = ['배달', 'B마트', '이용방법', '새소식', '가맹점'];
  return (
    <div className="hbox space-between m(auto) w(80%) p(1rem)">
      <div className="hbox gap(5vw)">
        {menu.map((i) => (
          <div className="hover:pointer(cursor)">{i}</div>
        ))}
      </div>
      <input
        placeholder="찾는 메뉴가 뭐예요?"
        className="bg(#f1f1f1) b(none) r(15) p(10/50/10/30) font(0.5rem) focus:outline(none)"
      />
    </div>
  );
};

export default MenuBar;
