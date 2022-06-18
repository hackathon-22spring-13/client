import { useEffect, useState } from 'react';
import { GiPaintBrush } from 'react-icons/gi';
import { GrSelect } from 'react-icons/gr';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { canvasState } from '../recoil/atoms/canvas';
import { lineState } from '../recoil/atoms/line';
import type { Mode } from '../types';

const ModeButton: React.FC = () => {
  const modes = {
    draw: {
      name: 'お絵描きモード',
      icon: <GiPaintBrush size={40} />,
    },
    select: {
      name: '選択モード',
      icon: <GrSelect size={40} />,
    },
  };
  const [mode, setMode] = useState<Mode>('draw');
  const setLine = useSetRecoilState(lineState);
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
    <div className='border border-l-gray-300 h-24 w-24'>
      <button
        className='border-b flex flex-col h-full bg-gray-200 w-full justify-center items-center  '
        onClick={handleChangeMode}
      >
        {modes[mode].icon}
        <p>{modes[mode].name}</p>
      </button>
    </div>
  );
};
export default ModeButton;
