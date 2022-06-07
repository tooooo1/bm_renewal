import { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import useLogin from '../hooks/useLogin';

const Login = () => {
  const navigate = useNavigate();
  const [id, setId] = useState<string>('');
  const [pw, setPw] = useState<string>('');
  const login = useLogin({ id, pw });

  const onChangeID = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setId(event.target.value);
  }, []);
  const onChangePW = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setPw(event.target.value);
  }, []);

  const loginAvailable = () => {
    console.log(id, pw);
    if (id === 'test1' && pw == 'test1!') {
      navigate('/');
      localStorage.setItem('id', id);
      localStorage.setItem('pw', pw);
    } else {
      alert('아이디/비밀번호를 다시 확인해주세요.');
    }
  };

  return (
    <div>
      <div className="vbox w(70%) m(auto) pack p(100/0)">
        <form className="w(400)">
          <div className="pack font(32) bold">로그인</div>
          <div>
            <div className="mt(4rem) mb(10) pl(4)">아이디</div>
            <input
              onChange={onChangeID}
              type="id"
              className="w(100%) p(22/20) r(6) b(1) bc(#ddd) focus:bc(#2ac1bc)"
            />
          </div>
          <div>
            <div className="mt(1rem) mb(10) pl(4)">비밀번호</div>
            <input
              onChange={onChangePW}
              type="password"
              className="w(100%) p(22/20) r(6) b(1) bc(#ddd) focus:bc(#2ac1bc)"
            />
          </div>

          <button
            disabled={id.length < 4 || pw.length < 4}
            className="bold w(100%) p(20) mt(3rem) b(none) bg(#2ac1bc) c(white) r(6)
            disabled:bg(#eee)+cursor(auto)+c(#ccc)"
            onClick={loginAvailable}
          >
            로그인
          </button>
        </form>
        <ul className="pack c(#777) mt(2rem) font(14px) font-family('Pretendard-Regular')">
          <li>
            <a className="pointer">회원가입</a>
          </li>
          <li className="before::content('|') before::m(0/20)">
            <a className="pointer" onClick={() => navigate('/findid')}>
              아이디 찾기
            </a>
          </li>
          <li className="before::content('|') before::m(0/20)">
            <a className="pointer" onClick={() => navigate('/findpw')}>
              비밀번호 찾기
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Login;
