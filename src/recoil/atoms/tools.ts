import { atom } from 'recoil';

type Tools = 'color' | 'weight' | 'object' | 'line' | 'clear' | '';
export const selectedToolState = atom<Tools>({
  key: 'selectedToolState',
  default: '',
});
