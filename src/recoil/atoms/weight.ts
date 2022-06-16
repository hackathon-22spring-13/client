import { atom } from 'recoil';

export const selectedWeightState = atom<string>({
  key: 'weightState',
  default: '1',
});
