import { useEffect, useState } from 'react';
import { GiPaintBrush } from 'react-icons/gi';
import { GrSelect } from 'react-icons/gr';
import { useRecoilValue } from 'recoil';
import { canvasState } from '../recoil/atoms/canvas';
import { Mode } from '../types';

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
    <div className='border border-l-gray-300 w-24'>
      <div>
        <button className='border-b bg-gray-200 h-24 w-full' onClick={handleChangeMode}>
          <>
            {modes[mode].icon}
            <p>{modes[mode].name}</p>
          </>
        </button>
      </div>
    </div>
  );
};
export default ModeButton;
