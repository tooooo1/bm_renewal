import { discountProps } from '../types';

const Discount = ({ middleTitle, title, substr1, substr2 }: discountProps) => {
  return (
    <div className="bg(#eee) w(550px) m(1rem) p(2rem) pr(15rem) pointer">
      <div className="font(1.4rem)">{middleTitle}</div>
      <div className="font(2rem) font-family('Pretendard-ExtraBold') mb(1rem)">{title}</div>
      <div className="font-family('Pretendard-SemiBold')">{substr1}</div>
      <div className="font-family('Pretendard-SemiBold')">{substr2}</div>
    </div>
  );
};

export default Discount;
