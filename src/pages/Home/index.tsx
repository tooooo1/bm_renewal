import Banner from '../../assets/banner.png';
import sushi from '../../assets/menu/sushi.png';
import jajangmyeon from '../../assets/menu/jajangmyeon.png';
import chicken from '../../assets/menu/chicken.png';
import rice from '../../assets/menu/rice.png';
import cupcake from '../../assets/menu/cupcake.png';
import { MenuItem } from '../../components';

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
