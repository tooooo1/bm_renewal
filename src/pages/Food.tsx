import sushi from '../assets/menu/sushi.png';
import TabBar from '../components/TabBar';
import { IMenu, TabContents } from '../types';

const menu: IMenu[] = [
  { name: '공지사항', option: 'announcement' },
  { name: 'FAQ', option: 'faq' },
  { name: '1:1 문의', option: 'inquiry' },
];

const checkList: TabContents = {
  0: <div>하1</div>,
  1: <div>하2</div>,
  2: <div>하3</div>,
};

const Food = () => {
  return (
    <div>
      <div className="vbox w(70%) m(auto) pack p(100/0)">
        <div className="hbox">
          <img src={sushi} width={200} alt="menu" />
          <div>
            <div>행복한찜닭</div>
            <div>여기는 메뉴</div>
          </div>
        </div>
        <TabBar menu={menu} checkList={checkList} />
      </div>
    </div>
  );
};

export default Food;
