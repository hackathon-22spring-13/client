import { atom } from 'recoil';

export const texUrlState = atom<string>({
  key: 'texUrlState',
  default: '',
});

export const isSucceededState = atom<boolean>({
  key: 'isSucceededState',
  default: false,
});
