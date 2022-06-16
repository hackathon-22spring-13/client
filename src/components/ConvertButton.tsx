import axios from 'axios';
import { useContext } from 'react';
import { useSetRecoilState } from 'recoil';
import { tikzState } from '../recoil/atoms/tikz';
import { CanvasContext } from './CanvasProvider';

const ConvertButton: React.FC = () => {
  const setTikz = useSetRecoilState(tikzState);
  const { canvas } = useContext(CanvasContext);

  function handleToSvg() {
    if (canvas) {
      const SVG = canvas.toSVG();
      alert(SVG);
      console.log(SVG);
    }
  }
  async function handleToTikz() {
    const res = await axios.get('/api/tikz/text');
    setTikz(res.data);
    alert(res.data);
  }

  return (
    <button
      className='rounded-lg bg-purple-400 mx-1 text-white mb-4 w-full p-2 hover:bg-purple-500'
      onClick={handleToSvg}
    >
      変換！
    </button>
  );
};

export default ConvertButton;
