import { useNavigate } from 'react-router-dom';
import logo from '../../assets/logo2.png';
import cartPNG from '../../assets/cart.png';

interface Props {
  title: string;
  location: string;
}

const Header = () => {
  let navigate = useNavigate();
  const menu = [
    { title: '배달', location: 'delivery' },
    { title: 'B마트', location: 'bmart' },
    { title: '이용방법', location: 'delivery' },
    { title: '새소식', location: 'delivery' },
    { title: '가맹점', location: 'delivery' },
  ];

  const logout = () => {
    navigate('/');
    localStorage.clear();
  };

  const cart = () => {
    if (!localStorage.id) navigate('/login');
    else navigate('/cart');
  };

  return (
    <div className="m(auto) w(80%) p(2rem)">
      <div className="hbox space-between">
        <div className="hbox">
          <img
            onClick={() => navigate('/')}
            className="hover:pointer(cursor)"
            src={logo}
            width={150}
            alt="logo"
          />
          <ul className="hbox ml(4vw) font(18) gap(3vw)">
            {menu.map(({ title, location }: Props) => (
              <li
                key={title}
                onClick={() => {
                  navigate(`/${location}`);
                }}
                className="hover:pointer(cursor)+c(#2ac1bc)"
              >
                {title}
              </li>
            ))}
          </ul>
        </div>
        <div className="hbox gap(10) c(gray) hover:pointer(cursor)">
          <input
            placeholder="찾는 메뉴가 뭐예요?"
            className="bg(#f1f1f1) b(none) r(15) p(10/50/10/30) focus:outline(none)
            bg-image(url('/src/assets/search.png'))
            background-repeat(no-repeat)
            background-position(95%)
            background-size(25px)
            pointer
            "
          />
          <img
            onClick={cart}
            className="hover:pointer(cursor) m(0/1rem)"
            src={cartPNG}
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
