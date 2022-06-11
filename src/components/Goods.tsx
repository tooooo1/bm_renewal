import { GoodsProps } from '../types';
import sushi from '../assets/menu/sushi.png';

const Goods = (props: GoodsProps) => {
  return (
    <div
      className="vpack w(25%) p(2rem/0) r(16) hover:cursor(pointer)+bg(#eee)+c(#2ac1bc) transition(.3s)"
      onClick={props.onClick}
    >
      {/* <img src={props.imgSrc} /> */}
      <img src={sushi} width="50%" />
      <div>{props.name}</div>
      <div>{props.price}원</div>
    </div>
  );
};

export default Goods;
