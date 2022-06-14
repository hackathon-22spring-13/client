export const changeObject = (canvas: fabric.Canvas | null, object: string) => {
  if (canvas !== null) {
    console.log(object);
  }
};

export const objects = [
  { name: '長方形', value: 'rect' },
  { name: '円', value: 'circle' },
  { name: '楕円', value: 'ellipse' },
  { name: '三角形', value: 'triangle' },
];
