import { GoodsProps } from '../types';
import sushi from '@assets/menu/sushi.png';

const Goods = ({ name, price, onClick }: GoodsProps) => {
  return (
    <div
      className="vpack w(25%) p(2rem/0) r(16) hover:cursor(pointer)+bg(#eee)+c(#2ac1bc) transition(.3s)"
      onClick={onClick}
    >
      {/* <img src={imgSrc} /> */}
      <img src={sushi} width="50%" />
      <div>{name}</div>
      <div>{price}원</div>
    </div>
  );
};

export default Goods;
