import { fabric } from 'fabric';

export const changeObject = (
  canvas: fabric.Canvas | null,
  offsetX: number,
  offsetY: number,
  object: string,
) => {
  if (canvas !== null) {
    if (object === 'rect') {
      const shape = new fabric.Rect({
        left: offsetX,
        top: offsetY,
        width: 100,
        height: 100,
        fill: '#fff',
        stroke: '#000',
        strokeWidth: 1,
      });
      canvas.add(shape);
    } else if (object === 'circle') {
      const shape = new fabric.Circle({
        left: offsetX - 50,
        top: offsetY,
        radius: 50,
        fill: '#fff',
        stroke: '#000',
        strokeWidth: 1,
      });
      canvas.add(shape);
    } else if (object === 'ellipse') {
      const shape = new fabric.Ellipse({
        left: offsetX - 50,
        top: offsetY,
        rx: 50,
        ry: 30,
        fill: '#fff',
        stroke: '#000',
        strokeWidth: 1,
      });
      canvas.add(shape);
    } else if (object === 'triangle') {
      const shape = new fabric.Triangle({
        left: offsetX - 50,
        top: offsetY,
        width: 100,
        height: 100,
        fill: '#fff',
        stroke: '#000',
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
