import { fabric } from 'fabric';
import { Color } from '../types';

export const changeObject = (
  canvas: fabric.Canvas | null,
  offsetX: number,
  offsetY: number,
  object: string,
  color: Color,
) => {
  if (canvas !== null) {
    if (object === 'rect') {
      const shape = new fabric.Rect({
        left: offsetX,
        top: offsetY,
        width: 100,
        height: 100,
        fill: 'transparent',
        stroke: color,
        strokeWidth: 1,
      });
      canvas.add(shape);
    } else if (object === 'circle') {
      const shape = new fabric.Circle({
        left: offsetX - 50,
        top: offsetY - 50,
        radius: 50,
        fill: 'transparent',
        stroke: color,
        strokeWidth: 1,
      });
      canvas.add(shape);
    } else if (object === 'ellipse') {
      const shape = new fabric.Ellipse({
        left: offsetX - 50,
        top: offsetY - 30,
        rx: 50,
        ry: 30,
        fill: 'transparent',
        stroke: color,
        strokeWidth: 1,
      });
      canvas.add(shape);
    } else if (object === 'triangle') {
      const shape = new fabric.Triangle({
        left: offsetX - 50,
        top: offsetY,
        width: 100,
        height: 100,
        fill: 'transparent',
        stroke: color,
        strokeWidth: 1,
      });
      canvas.add(shape);
    }
  }
};

export const objects = [
  { name: '長方形', value: 'rect' },
  { name: '円', value: 'circle' },
  { name: '楕円', value: 'ellipse' },
  { name: '三角形', value: 'triangle' },
];
