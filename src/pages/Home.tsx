import Banner from '../assets/image/banner.png';
import BottomBanner from '../assets/image/bottombanner.png';
import sushi from '../assets/menu/sushi.png';
import jajangmyeon from '../assets/menu/jajangmyeon.png';
import chicken from '../assets/menu/chicken.png';
import rice from '../assets/menu/rice.png';
import cupcake from '../assets/menu/cupcake.png';
import { MenuItem, Discount } from '../components';
import { discountProps, TwoStringProps } from '../types';

const menuList = [
  { title: '돈까스,회,일식', option: sushi },
  { title: '중식', option: jajangmyeon },
  { title: '치킨', option: chicken },
  { title: '백반', option: rice },
  { title: '카페,디저트', option: cupcake },
];

const DiscountList = [
  {
    middleTitle: '육즙팡팡! 오븐마루 치킨',
    title: '최대 6천원 할인',
    substr1: '국내산 100% 냉장육만 고집합니다',
    substr2: '순살은 다리살로 부드러움 끝판왕',
  },
  {
    middleTitle: '쌀통닭 전 메뉴',
    title: '최대 5천원 할인',
    substr1: '100% 쌀가루로 더 바삭하고 맛있는 쌀통닭',
    substr2: '매주 수요일, 일요일',
  },
  {
    middleTitle: '빕스 모든 메뉴',
    title: '1만 2천원 할인',
    substr1: '홈파티의 정석!',
    substr2: '집에서 즐기는 빕스 다이닝',
  },
  {
    middleTitle: '매주 월/화/수/목',
    title: '최대 6천원 할인',
    substr1: '화끈하게 찾아왔다! 신메뉴 출시!',
    substr2: '마라와 아수라의 뜨거운 만남!',
  },
];

const Home = () => {
  return (
    <div className="vbox pack">
      <img src={Banner} alt="banner" />
      <div className="hbox m(auto) w(70%) p(4rem) mb(10vh) bb(1px) bc(#ddd) space-evenly">
        {menuList.map(({ title, option }: TwoStringProps) => (
          <MenuItem key={title} title={title} option={option} />
        ))}
      </div>
      <div className="pack font(2rem) mb(6vh) font-family('Pretendard-ExtraBold')">오늘의 할인</div>
      <div className="hbox pack flex-wrap w(70%) mb(6vh)">
        {DiscountList.map(({ middleTitle, title, substr1, substr2 }: discountProps) => (
          <Discount
            key={title}
            middleTitle={middleTitle}
            title={title}
            substr1={substr1}
            substr2={substr2}
          />
        ))}
      </div>
      <img src={BottomBanner} alt="bottombanner" />
    </div>
  );
};

export default Home;
