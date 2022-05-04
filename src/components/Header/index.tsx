import { useNavigate } from 'react-router-dom';

const Header = () => {
  let navigate = useNavigate();
  const menu = ['배달', 'B마트', '이용방법', '새소식', '가맹점'];

  const logout = () => {
    navigate('/');
    localStorage.clear();
  };

  const cart = () => {
    if (!localStorage.id) navigate('/login');
    else navigate('/cart');
  };

  return (
    <div className="m(auto) w(80%) p(1rem)">
      <div className="hbox space-between">
        <div className="hbox">
          <img
            onClick={() => navigate('/')}
            className="hover:pointer(cursor)"
            src={'src/assets/logo.png'}
            width={100}
            alt="logo"
          />
          <ul className="hbox ml(4vw) font(18) gap(3vw)">
            {menu.map((i) => (
              <li key={i.toString()} className="hover:pointer(cursor) hover:c(#2ac1bc)">
                {i}
              </li>
            ))}
          </ul>
        </div>
        <div className="hbox gap(10) c(gray) hover:pointer(cursor)">
          <input
            placeholder="찾는 메뉴가 뭐예요?"
            className="bg(#f1f1f1) b(none) r(15) p(10/50/10/30) focus:outline(none)"
          />
          <img
            onClick={cart}
            className="hover:pointer(cursor) m(0/1rem)"
            src={'src/assets/cart.png'}
            width={25}
            alt="logo"
          />
          {!localStorage.id ? (
            <div className="b(2) p(4/12) r(16)" onClick={() => navigate('/login')}>
              로그인
            </div>
          ) : (
            <div className="b(2) p(4/12) r(16)" onClick={logout}>
              로그아웃
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
