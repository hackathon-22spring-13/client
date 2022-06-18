import { fabric } from 'fabric';

export const addTextbox = (canvas: fabric.Canvas | null, offsetX: number, offsetY: number) => {
  if (canvas !== null) {
    const text = new fabric.Textbox('テキストを入力', {
      width: 100,
      left: offsetX,
      top: offsetY,
    });
    canvas.add(text);
  }
};
