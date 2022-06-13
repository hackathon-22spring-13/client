import { atom } from 'recoil';

export const canvasState = atom<fabric.Canvas | null>({
  key: 'canvasState',
  default: null,
});
//cannot freezeとかいうエラーをどうにかしないとrecoil使わずに実装することになる
