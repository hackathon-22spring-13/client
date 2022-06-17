import { atom } from 'recoil';

export const texUrlState = atom<string>({
  key: 'texUrlState',
  default: '',
});
