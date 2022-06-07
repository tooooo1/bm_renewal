import { tempProps } from '../../../types';
import { im } from '../../../assets/detailMenu/coffee.png';

const OptionItem = (props: tempProps) => {
  console.log(props);
  const { id, imgSrc, name, price, count } = props;
  console.log('이름', name);
  return (
    <div className="hbox w(100%) c(black) p(1rem/0) bb(1/rgb(229,231,235))">
      <div className="w(30%)">
        <img src={imgSrc} alt={imgSrc} />
      </div>
      <div className="w(70%)">
        <div className="hbox space-between">
          <div>{name}</div>
          <div>{(price ? price : 1) * (count ? count : 1)}</div>
        </div>
        <div className="hbox space-between pt(2rem)">
          <div>{count}개</div>
          <button className="c(#2ac1bc)">삭제하기</button>
        </div>
      </div>
    </div>
  );
};

export default OptionItem;
