import logo from '../assets/image/logo.png';

const About = () => {
  return (
    <div>
      <div className="vbox w(70%) m(auto) pack p(100/0)">
        <div className="hbox mt(5rem) mb(15rem)">
          <img src={logo} width="200" alt="logo" />
          <div className="ml(4rem)">
            <div className="text-center font(1.3rem) font-family(Pretendard-SemiBold)">
              수원대학교 우아한 형제들(정충일, 김희찬)
            </div>
            <div className="text-center font(1.3rem) mt(10px)">장성태 교수님의 졸업프로젝트!</div>
            <div className="mt(4vh) font-family(Pretendard-Regular)">
              진짜&nbsp;
              <strong
                className="font-family(Pretendard-Bold)
              box-shadow(inset/0/-4px/0/rgb(42,193,188,50%))"
              >
                배달의민족
              </strong>
              &nbsp;사이트 아니에요. 오해하지 말아주세요.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
