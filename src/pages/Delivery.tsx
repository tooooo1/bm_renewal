import ReactPlayer from 'react-player';
import { useEffect, useState } from 'react';

const Delivery = () => {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    const timer = setInterval(() => setCount(count + 1), 1000);
    return () => clearInterval(timer);
  });
  return (
    <div className="vpack">
      <div className="w(100%) h(950) pointer-events(none) bg(url(https://www.coupangeats.com/wp-content/uploads/2021/09/Screen-Shot-2021-09-14-at-8.50.38-PM.png))">
        <ReactPlayer
          url="https://www.youtube-nocookie.com/embed/hfWZ1DlLnqU?controls=0&amp;rel=0&amp;playsinline=1&amp;enablejsapi=1&amp;origin=https%3A%2F%2Fwww.coupangeats.com&amp;widgetid=1"
          width="100%"
          height="100%"
          playing={true}
          muted={true}
          loop={true}
        />
      </div>
    </div>
  );
};

export default Delivery;
