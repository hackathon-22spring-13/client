import { atom } from 'recoil';

type Shape = 'rect' | 'circle' | 'ellipse' | 'triangle' | '';
export const selectedShapeState = atom<Shape>({
  key: 'selectedShapetState',
  default: '',
});
