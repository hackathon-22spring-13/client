import { atom } from 'recoil';
import type { Line } from '../../types';

export const lineState = atom<Line>({
  key: 'lineState',
  default: { x: -1, y: -1 },
});
