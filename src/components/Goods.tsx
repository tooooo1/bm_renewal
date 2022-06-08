import { GoodsProps } from '../types';

const Goods = (props: GoodsProps) => {
  return (
    <div>
      <img src={props.imgSrc} />
      {props.name}
      {props.price}원
    </div>
  );
};

export default Goods;
