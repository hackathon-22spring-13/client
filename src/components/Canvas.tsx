import { fabric } from 'fabric';
import { useContext, useEffect, useRef } from 'react';
import { CanvasContext } from './CanvasProvider';
import ModeBar from './ModeBar';
import ToolBar from './ToolBar';

const Canvas: React.FC = () => {
  const { setCanvas } = useContext(CanvasContext);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const initCanvas = new fabric.Canvas(canvasRef.current, {
      isDrawingMode: true,
      width: 1086,
      height: 640,
    });
    setCanvas(initCanvas);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  return (
    <div className='flex justify-between'>
      <ToolBar />
      <canvas ref={canvasRef} />
      <ModeBar />
    </div>
  );
};

export default Canvas;
