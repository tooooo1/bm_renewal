import { useCallback, useState } from 'react';

const FindID = () => {
  const [name, setName] = useState<string>('');

  const onChangeName = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  }, []);

  const loginAvailable = () => {
    if (name === '우아한형제들') {
      alert('성공');
    } else {
      alert('이름을 다시 확인해주세요.');
    }
  };
  return (
    <div>
      <div className="vpack w(70%) m(auto) p(100/0)">
        <div className="w(400)">
          <div className="pack font(32) mb(3rem) bold">아이디 찾기</div>
          <div>
            <div>
              <div className="mt(4rem) mb(10) pl(4)">이름</div>
              <input
                onChange={onChangeName}
                type="name"
                className="w(100%) p(22/20) r(6) b(1) bc(#ddd) focus:bc(#2ac1bc)"
              />
            </div>
            <button
              disabled={name.length < 2}
              className="bold w(100%) p(20) mt(3rem) b(none) bg(#2ac1bc) c(white) r(6)
            disabled:bg(#eee)+cursor(auto)+c(#ccc)"
              onClick={loginAvailable}
            >
              아이디 찾기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindID;
