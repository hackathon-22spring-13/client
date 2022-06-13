import { fabric } from 'fabric';
import { useEffect, useRef } from 'react';
import { useSetRecoilState } from 'recoil';
import { canvasState } from '../recoil/atoms/canvas';
import ModeBar from './ModeBar';
import ToolBar from './ToolBar';

const Canvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  //const [canvas, setCanvas] = useState<fabric.Canvas | null>(null);
  const setCanvas = useSetRecoilState(canvasState);

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
