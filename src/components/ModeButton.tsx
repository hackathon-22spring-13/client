import { useEffect, useState } from 'react';
import { GiPaintBrush } from 'react-icons/gi';
import { HiCursorClick } from 'react-icons/hi';
import { useRecoilValue } from 'recoil';
import { canvasState } from '../recoil/atoms/canvas';
import type { Mode } from '../types';

const ModeButton: React.FC = () => {
  const modes = {
    draw: {
      name: 'お絵描きモード',
      icon: <GiPaintBrush size={40} />,
    },
    select: {
      name: '選択モード',
      icon: <HiCursorClick size={40} />,
    },
  };
  const [mode, setMode] = useState<Mode>('draw');
  const canvas = useRecoilValue(canvasState);

  function handleChangeMode() {
    if (mode === 'draw') {
      setMode('select');
      if (canvas !== null) {
        canvas.isDrawingMode = false;
      }
    } else {
      setMode('draw');
      if (canvas !== null) {
        canvas.isDrawingMode = true;
      }
    }
  }
  useEffect(() => {
    setMode(canvas?.isDrawingMode ? 'draw' : 'select');
  }, [canvas?.isDrawingMode]);

  return (
    <button
      className='border-b flex flex-col h-full w-full justify-center items-center'
      onClick={handleChangeMode}
    >
      {modes[mode].icon}
      <p>{modes[mode].name}</p>
    </button>
  );
};
export default ModeButton;
