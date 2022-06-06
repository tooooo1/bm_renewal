import { useEffect } from 'react';

const useItems = () => {
  useEffect(() => {
    fetch('/items')
      .then(async (response) => {
        if (response.ok) {
          const result = await response.json();
          console.log(result);
        }
      })
      .catch(console.error);
  }, []);
};

export default useItems;
