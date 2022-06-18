import type { Color } from '../types';

export const changeColor = (canvas: fabric.Canvas | null, color: Color) => {
  if (canvas !== null) {
    canvas.freeDrawingBrush.color = color;
  }
};

export const colors = [
  { name: '赤', value: 'red' },
  { name: '青', value: 'blue' },
  { name: '緑', value: 'green' },
  { name: '黄色', value: 'yellow' },
  { name: 'オレンジ', value: 'orange' },
  { name: '紫', value: 'purple' },
  { name: 'ピンク', value: '  pink' },
  { name: '茶', value: 'brown' },
  { name: '黒', value: 'black' },
  { name: '白', value: 'white' },
];
