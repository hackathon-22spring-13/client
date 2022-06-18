import { atom } from 'recoil';

export const shouldShowMenuModalState = atom<boolean>({
  key: 'shouldShowMenuModalState',
  default: false,
});

export const shouldShowManualModalState = atom<boolean>({
  key: 'shouldShowManualModalState',
  default: false,
});
