import Logo from '../../assets/logo.png/';

const Footer = () => {
  const menu = ['About', '공지사항', '이용약관', '개인정보처리방침', '대량구매/제휴안내'];
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
    <div className="hbox pack bg(#FAFAFA)">
      <div>
        <img src={Logo} width={100} alt="logo" />
      </div>
      <div>
        <ul className="hbox ml(4vw) gap(3vw)">
          {menu.map((i) => (
            <li key={i.toString()} className="hover:pointer(cursor)">
              {i}
            </li>
          ))}
        </ul>
        <div className="flex c(#999999)">
          {ptag.map((i) => (
            <p
              key={i.toString()}
              className="inline-block after::w(1)
            after::h(10) after::m(0/10)
            after::content(|)"
            >
              {i}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
