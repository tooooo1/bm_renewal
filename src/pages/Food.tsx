import sushi from '../assets/menu/sushi.png';

const Food = () => {
  return (
    <div>
      <div className="vbox w(70%) m(auto) pack p(100/0)">
        <img src={sushi} width={200} alt="menu" />
      </div>
    </div>
  );
};

export default Food;
