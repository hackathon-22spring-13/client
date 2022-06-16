import { atom } from 'recoil';

export const canvasState = atom<fabric.Canvas | null>({
  key: 'canvasState',
  default: null,
  dangerouslyAllowMutability: true,
});
