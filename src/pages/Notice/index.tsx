import { memo, useEffect, useState } from 'react';
import NoticeItem from '../../components/NoticeItem';
import ReactLoading from 'react-loading';

const Notice = () => {
  const [target, setTarget] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [itemLists, setItemLists] = useState([1]);

  const getMoreItem = async () => {
    setIsLoaded(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    let Items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    setItemLists((itemLists) => itemLists.concat(Items));
    setIsLoaded(false);
  };
  const onIntersect = async ([entry]: any, observer: any) => {
    if (entry.isIntersecting && !isLoaded) {
      observer.unobserve(entry.target);
      await getMoreItem();
      observer.observe(entry.target);
    }
  };
  useEffect(() => {
    let observer: any;
    if (target) {
      observer = new IntersectionObserver(onIntersect, {
        threshold: 0.4,
      });
      observer.observe(target);
    }
    return () => observer && observer.disconnect();
  });

  return (
    <div>
      <div className="vbox w(70%) m(auto) pack p(100/0)">
        <div className="pack font(32) mb(3rem) bold">공지사항</div>

        {itemLists.map((v, i) => {
          return <NoticeItem title={i + 1} content={i} key={v} />;
        })}
        <div className="mt(2rem)" ref={setTarget}>
          {isLoaded && <ReactLoading type="spin" color="#2ac1bc" />}
        </div>
      </div>
    </div>
  );
};

export default memo(Notice);
