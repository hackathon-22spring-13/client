import { atom } from 'recoil';

export const tikzState = atom<string>({
  key: 'tikzState',
  default: '',
});
