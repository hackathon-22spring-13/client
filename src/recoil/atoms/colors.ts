import { atom } from 'recoil';
import type { Color } from '../../types';

export const selectedColorState = atom<Color>({
  key: 'colorState',
  default: 'black',
});
