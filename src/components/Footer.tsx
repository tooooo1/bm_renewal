import Logo from '../assets/image/logo2.png';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();
  const menu = [
    { title: 'About', nav: 'about' },
    { title: '공지사항', nav: 'notice' },
    { title: '이용약관', nav: 'about' },
    { title: '개인정보처리방침', nav: 'about' },
    { title: '대량구매/제휴안내', nav: 'about' },
  ];
  const ptag = [
    '상호 : (주)우아한형제들',
    '대표 : 김범준',
    '사업자등록번호 : 120-87-65763',
    '통신판매업신고번호 : 2021-서울송파-0515',
    '사업자정보확인',
    '대표번호 : 1670-9902',
    '이메일 : marketing_store@woowahan.com',
    '주소 : 서울특별시 송파구 위례성대로 2 장은빌딩',
    '호스팅제공 : (주)우아한형제들',
    '© Woowa Brothers Corp. All rights reserved',
  ];
  return (
    <div className="pack bg(#FAFAFA)">
      <div className="hbox pack pt(3rem) pb(4rem) w(50%)">
        <div className="mr(6rem)">
          <img src={Logo} width={150} alt="logo" />
        </div>

        <div className="vbox w(100%)">
          <ul className="hbox mb(2vh) gap(3vw)">
            {menu.map((i) => (
              <li
                key={i.title}
                className="hover:pointer(cursor)"
                onClick={() => navigate(`/${i.nav}`)}
              >
                {i.title}
              </li>
            ))}
          </ul>

          <div className="c(#999999)">
            {ptag.map((i) => (
              <p
                key={i.toString()}
                className="inline-block font(13) m(2/0) after::m(0/10)
            after::content('|')"
              >
                {i}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
