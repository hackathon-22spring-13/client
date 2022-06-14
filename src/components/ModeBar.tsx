import { useContext, useState } from 'react';
import { GiPaintBrush } from 'react-icons/gi';
import { GrSelect } from 'react-icons/gr';
import { Mode } from '../types';
import { CanvasContext } from './CanvasProvider';

const ModeBar: React.FC = () => {
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
  const { canvas } = useContext(CanvasContext);

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

  return (
    <div className='border border-l-gray-300 w-24'>
      <button className='border-b bg-gray-100 h-24 w-full' onClick={handleChangeMode}>
        <>
          {modes[mode].icon}
          <p>{modes[mode].name}</p>
        </>
      </button>
    </div>
  );
};
export default ModeBar;
