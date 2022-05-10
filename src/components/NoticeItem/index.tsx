import { memo } from 'react';

interface Props {
  title: number;
  content: number;
}

const NoticeItem = ({ title, content }: Props) => {
  return (
    <div className="w(100%) b(#f1f1f1) p(1.5rem) r(10) mt(2vh) pointer">
      <div className="flex font(1rem) mr(0.7rem)">배달의 민족{title}</div>
      <div className="p(0.5rem/0) font(0.8rem) c(#a3a3a3) font-family('Pretendard-Light')">
        우아한 형제들 {content}
      </div>
    </div>
  );
};

export default memo(NoticeItem);
