import { fabric } from 'fabric';
import { useEffect, useRef } from 'react';
import { useRecoilState } from 'recoil';
import { canvasState } from '../recoil/atoms/canvas';
import { selectedShapeState } from '../recoil/atoms/object';
import { selectedToolState } from '../recoil/atoms/tools';
import { changeObject } from '../tools/object';
import LeftToolBar from './LeftToolBar';
import RightToolBar from './RightToolBar';

const Canvas: React.FC = () => {
  const [canvas, setCanvas] = useRecoilState(canvasState);
  const [selectedShape, setSelectedShape] = useRecoilState(selectedShapeState);
  const [selectedTool, setSelectedTool] = useRecoilState(selectedToolState);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  function handleAddObject(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    if (canvas !== null) {
      const { offsetX, offsetY } = e.nativeEvent;
      const { width, height } = canvas;
      if (width !== undefined && height !== undefined && selectedTool === 'object') {
        changeObject(canvas, offsetX, offsetY, selectedShape);
        setSelectedShape('');
        setSelectedTool('');
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
      <LeftToolBar />
      <div onClick={(e) => handleAddObject(e)}>
        <canvas ref={canvasRef} />
      </div>
      <RightToolBar />
    </div>
  );
};

export default Canvas;
