import { atom } from 'recoil';
import { GoodsProps } from '../types';

export const lineItemState = atom<GoodsProps[]>({
  key: 'lineItemState',
  default: [
    {
      id: 1,
      imgSrc: 'hi',
      name: 'string',
      price: 100,
      count: 1,
    },
  ],
});
