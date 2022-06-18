import axios from 'axios';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { canvasState } from '../recoil/atoms/canvas';
import { texUrlState } from '../recoil/atoms/texUrl';
import { tikzState } from '../recoil/atoms/tikz';

const ConvertButton: React.FC = () => {
  const setTikz = useSetRecoilState(tikzState);
  const setTexUrl = useSetRecoilState(texUrlState);
  const canvas = useRecoilValue(canvasState);

  async function handleToTikz() {
    if (canvas) {
      const svgBlob = new Blob([canvas.toSVG()], { type: 'image/svg+xml' });
      const formData = new FormData();
      formData.append('svg_file', svgBlob);
      try {
        const res = await axios.post(
          'https://hackaton_22spring_13.trap.show/server/file',
          formData,
        );
        setTikz(res.data);
        const texBlob = new Blob([res.data], { type: 'application/x-tex' });
        setTexUrl(URL.createObjectURL(texBlob));
        alert('succeeded!');
      } catch (err) {
        alert('failed!');
      }
    }
  }

  return (
    <button
      className='rounded-lg bg-purple-500 mx-1 text-white mb-4 w-full p-2 hover:bg-purple-600'
      onClick={handleToTikz}
    >
      変換!
    </button>
  );
};

export default ConvertButton;
