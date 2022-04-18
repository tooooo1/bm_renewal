import Logo from '../../assets/logo.png/';

const Header = () => {
  return (
    <div className="m(auto) w(80%) p(1rem)">
      <div className="hbox space-between">
        <img src={Logo} alt="logo" />
        <div className="hbox gap(10) font(0.5rem) c(gray)">
          <div>로그인</div>
          <div>회원가입</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
