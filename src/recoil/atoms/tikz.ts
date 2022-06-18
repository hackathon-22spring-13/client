import { atom } from 'recoil';

export const tikzState = atom<string>({
  key: 'tikzState',
  default: '',
});

export const tikzTextState = atom<string>({
  key: 'texTextState',
  default: '',
});
