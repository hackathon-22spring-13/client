import { fabric } from 'fabric';
import { useEffect, useRef } from 'react';
import { useSetRecoilState } from 'recoil';
import { canvasState } from '../recoil/atoms/canvas';
import ToolBar from './ToolBar';

const Canvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  //const [canvas, setCanvas] = useState<fabric.Canvas | null>(null);
  const setCanvas = useSetRecoilState(canvasState);

  useEffect(() => {
    const initCanvas = new fabric.Canvas(canvasRef.current, {
      isDrawingMode: true,
      width: 1152,
      height: 640,
    });
    setCanvas(initCanvas);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  return (
    <div className='flex justify-between'>
      <canvas ref={canvasRef} />
      <div className='bg-red-300 w-32 grow'>
        <ToolBar />
      </div>
    </div>
  );
};

export default Canvas;
