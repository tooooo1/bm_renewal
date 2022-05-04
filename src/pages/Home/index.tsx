import Banner from '../../assets/banner.png';
import { MenuItem } from '../../components';

const menuList = [
  { title: '돈까스,회,일식', img: 'src/assets/menu/sushi.png' },
  { title: '중식', img: 'src/assets/menu/jajangmyeon.png' },
  { title: '치킨', img: 'src/assets/menu/chicken.png' },
  { title: '백반', img: 'src/assets/menu/rice.png' },
  { title: '카페,디저트', img: 'src/assets/menu/cupcake.png' },
];

interface Props {
  title: string;
  img: string;
}

const Home = () => {
  return (
    <div>
      <img src={Banner} alt="banner" />
      <div className="hbox m(auto) w(70%) p(4rem) space-evenly">
        {menuList.map(({ title, img }: Props) => (
          <MenuItem key={title} img={img} title={title} />
        ))}
      </div>
    </div>
  );
};

export default Home;
