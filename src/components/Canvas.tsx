import { fabric } from 'fabric';
import { useEffect, useRef } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { canvasState } from '../recoil/atoms/canvas';
import { selectedColorState } from '../recoil/atoms/colors';
import { lineState } from '../recoil/atoms/line';
import { selectedShapeState } from '../recoil/atoms/object';
import { selectedToolState } from '../recoil/atoms/tools';
import { selectedWeightState } from '../recoil/atoms/weight';
import { changeObject } from '../tools/object';
import LeftToolBar from './LeftToolBar';
import RightToolBar from './RightToolBar';

const Canvas: React.FC = () => {
  const [canvas, setCanvas] = useRecoilState(canvasState);
  const [selectedShape, setSelectedShape] = useRecoilState(selectedShapeState);
  const [selectedTool, setSelectedTool] = useRecoilState(selectedToolState);
  const [line, setLine] = useRecoilState(lineState);
  const selectedWeight = useRecoilValue(selectedWeightState);
  const selectedColor = useRecoilValue(selectedColorState);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  function handleAddObject(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    if (selectedTool === 'object') {
      if (canvas !== null) {
        const { offsetX, offsetY } = e.nativeEvent;
        changeObject(canvas, offsetX, offsetY, selectedShape, selectedColor);
        setSelectedShape('');
        setSelectedTool('');
      }
    }
    if (selectedTool === 'line') {
      if (canvas !== null) {
        const { offsetX, offsetY } = e.nativeEvent;
        if (line.x === -1 && line.y === -1) {
          setLine({ x: offsetX, y: offsetY });
        } else {
          canvas.add(
            new fabric.Line([line.x, line.y, offsetX, offsetY], {
              strokeWidth: Number(selectedWeight),
              stroke: selectedColor,
            }),
          );
          setLine({ x: -1, y: -1 });
          setSelectedTool('');
        }
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
