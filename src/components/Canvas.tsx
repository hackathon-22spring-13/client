import { fabric } from 'fabric';
import { useEffect, useRef, useState } from 'react';

const Canvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [canvas, setCanvas] = useState<fabric.Canvas | null>(null);
  function handleConvert() {
    if (canvas) {
      const SVG = canvas.toSVG();
      console.log(SVG);
    }
  }
  useEffect(() => {
    const initCanvas = new fabric.Canvas(canvasRef.current, {
      isDrawingMode: true,
      width: 1280,
      height: 640,
    });
    setCanvas(initCanvas);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  return (
    <div>
      <canvas ref={canvasRef}></canvas>
      <button onClick={handleConvert}>convert</button>
    </div>
  );
};

export default Canvas;
