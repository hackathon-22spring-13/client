import { atom } from 'recoil';
import { Color } from '../../types';

export const selectedColorState = atom<Color>({
  key: 'colorState',
  default: 'black',
});
