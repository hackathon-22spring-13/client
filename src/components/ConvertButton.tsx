import axios from 'axios';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { canvasState } from '../recoil/atoms/canvas';
import { isSucceededState, texUrlState } from '../recoil/atoms/texUrl';
import { tikzState, tikzTextState } from '../recoil/atoms/tikz';

const ConvertButton: React.FC = () => {
  const setTikz = useSetRecoilState(tikzState);
  const setTexUrl = useSetRecoilState(texUrlState);
  const setTikzText = useSetRecoilState(tikzTextState);
  const canvas = useRecoilValue(canvasState);
  const [isSucceeded, setIsSucceeded] = useRecoilState(isSucceededState);

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
        setIsSucceeded(true);
      } catch (err) {
        setIsSucceeded(false);
        alert('failed!');
      }
      try {
        const res = await axios.post(
          'https://hackaton_22spring_13.trap.show/server/tikz/text',
          formData,
        );
        setTikzText(res.data.tikz);
        setIsSucceeded(true);
      } catch (err) {
        setIsSucceeded(false);
        alert('failed!');
      }
    }
  }

  return (
    <div className='flex flex-col w-full'>
      <p className='text-center'>{isSucceeded && '変換成功！'}</p>
      <button
        className='rounded-lg bg-purple-500 text-white mb-4 w-full p-2 block hover:bg-purple-600'
        onClick={handleToTikz}
      >
        変換!
      </button>
    </div>
  );
};

export default ConvertButton;
