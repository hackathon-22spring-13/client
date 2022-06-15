import { fabric } from 'fabric';
import { useContext, useEffect, useRef } from 'react';
import { useRecoilValue } from 'recoil';
import { selectedShapeState } from '../recoil/atoms/object';
import { selectedToolState } from '../recoil/atoms/tools';
import { changeObject } from '../tools/object';
import { CanvasContext } from './CanvasProvider';
import ModeBar from './ModeBar';
import ToolBar from './ToolBar';

const Canvas: React.FC = () => {
  const { canvas, setCanvas } = useContext(CanvasContext);
  const selectedShape = useRecoilValue(selectedShapeState);
  const selectedTool = useRecoilValue(selectedToolState);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  function handleAddObject(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    if (canvas !== null) {
      const { offsetX, offsetY } = e.nativeEvent;
      const { width, height } = canvas;
      if (width !== undefined && height !== undefined && selectedTool === 'object') {
        changeObject(canvas, offsetX, offsetY, selectedShape);
      }
    }
  }

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
      <div onClick={(e) => handleAddObject(e)}>
        <canvas ref={canvasRef} />
      </div>
      <ModeBar />
    </div>
  );
};

export default Canvas;
