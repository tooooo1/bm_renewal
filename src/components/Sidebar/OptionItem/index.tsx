import { GoodsProps } from '../../../types';
import sushi from '../../../assets/menu/sushi.png';

const OptionItem = (props: GoodsProps) => {
  console.log(props);
  const { id, imgSrc, name, price, count } = props;
  return (
    <div className="hbox w(100%) c(black) p(2rem) bb(1/rgb(229,231,235))">
      <div className="w(14%)">
        <img src={sushi} alt={imgSrc} width='50' />
      </div>
      <div className="w(86%)">
        <div className="hbox space-between">
          <div>{name}</div>
          <div>{(price ? price : 1) * (count ? count : 1)}</div>
        </div>
        <div className="hbox space-between pt(1rem)">
          <div>{count}개</div>
          <button className="c(#2ac1bc)">삭제하기</button>
        </div>
      </div>
    </div>
  );
};

export default OptionItem;
