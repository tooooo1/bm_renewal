import { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import useLogin from '../../hooks/useLogin';

const Login = () => {
  let navigate = useNavigate();
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
    if (login) {
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
        <div className="w(400)">
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
        </div>
      </div>
    </div>
  );
};

export default Login;
