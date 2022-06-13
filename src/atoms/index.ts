import { GoodsProps } from '../types';
import { atom } from 'recoil';

export const lineItemState = atom<GoodsProps[]>({
  key: 'lineItems',
  default: [],
});

export const selectOptionState = atom({
  key: 'selectOption',
  default: 0,
});
