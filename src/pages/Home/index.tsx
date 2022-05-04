import { Header } from '../../components';
import Banner from '../../assets/banner.png/';

const Home = () => {
  return (
    //전체 Wrapper
    <div>
      <Header />
      <img src={Banner} alt="banner" />
    </div>
  );
};

export default Home;
