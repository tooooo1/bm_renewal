import Banner from '../../assets/banner.png';
import BottomBanner from '../../assets/bottombanner.png';
import sushi from '../../assets/menu/sushi.png';
import jajangmyeon from '../../assets/menu/jajangmyeon.png';
import chicken from '../../assets/menu/chicken.png';
import rice from '../../assets/menu/rice.png';
import cupcake from '../../assets/menu/cupcake.png';
import { MenuItem, Discount } from '../../components';

const menuList = [
  { title: '돈까스,회,일식', img: sushi },
  { title: '중식', img: jajangmyeon },
  { title: '치킨', img: chicken },
  { title: '백반', img: rice },
  { title: '카페,디저트', img: cupcake },
];

interface Props {
  title: string;
  img: string;
}

const Home = () => {
  return (
    <div className="vbox pack">
      <img src={Banner} alt="banner" />
      <div className="hbox m(auto) w(70%) p(4rem) mb(10vh) bb(1px) bc(#ddd) space-evenly">
        {menuList.map(({ title, img }: Props) => (
          <MenuItem key={title} img={img} title={title} />
        ))}
      </div>
      <div className="pack font(2rem) mb(6vh) font-family('Pretendard-ExtraBold')">오늘의 할인</div>
      <div className="hbox pack flex-wrap w(70%) mb(6vh)">
        <Discount
          middleTitle="육즙팡팡! 오븐마루 치킨"
          title="최대 6천원 할인"
          substr1="국내산 100% 냉장육만 고집합니다"
          substr2="순살은 다리살로 부드러움 끝판왕"
        />
        <Discount
          middleTitle="육즙팡팡! 오븐마루 치킨"
          title="최대 6천원 할인"
          substr1="국내산 100% 냉장육만 고집합니다"
          substr2="순살은 다리살로 부드러움 끝판왕"
        />
        <Discount
          middleTitle="육즙팡팡! 오븐마루 치킨"
          title="최대 6천원 할인"
          substr1="국내산 100% 냉장육만 고집합니다"
          substr2="순살은 다리살로 부드러움 끝판왕"
        />
        <Discount
          middleTitle="육즙팡팡! 오븐마루 치킨"
          title="최대 6천원 할인"
          substr1="국내산 100% 냉장육만 고집합니다"
          substr2="순살은 다리살로 부드러움 끝판왕"
        />
      </div>
      <img src={BottomBanner} alt="bottombanner" />
    </div>
  );
};

export default Home;
