import { atom } from 'recoil';

export const shouldShowModalState = atom<boolean>({
  key: 'shouldShowModalState',
  default: false,
});
