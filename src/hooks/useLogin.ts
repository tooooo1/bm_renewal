import { useState, useEffect } from 'react';

interface Props {
  id: string;
  pw: string;
}

const useLogin = ({ id, pw }: Props) => {
  const [user, setUser] = useState(false);

  useEffect(() => {
    fetch('/user')
      .then(async (response) => {
        if (response.ok) {
          const result = await response.json();
          if (id === result.id && pw === result.pw) setUser(true);
        }
      })
      .catch(console.error);
  }, [id, pw]);

  return user;
};

export default useLogin;
