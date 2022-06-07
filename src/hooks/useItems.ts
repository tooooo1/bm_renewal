import { useState, useEffect } from 'react';

const useItems = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch('/items')
      .then(async (response) => {
        if (response.ok) {
          const result = await response.json();
          console.log('유스', result);
          setItems(result);
        }
      })
      .catch(console.error);
  }, [setItems]);

  return items;
};

export default useItems;
