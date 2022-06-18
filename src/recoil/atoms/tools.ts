import { atom } from 'recoil';
import type { Tools } from '../../types';

export const selectedToolState = atom<Tools>({
  key: 'selectedToolState',
  default: '',
});
