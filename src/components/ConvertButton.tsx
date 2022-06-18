import axios from 'axios';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { canvasState } from '../recoil/atoms/canvas';
import { texUrlState } from '../recoil/atoms/texUrl';
import { tikzState } from '../recoil/atoms/tikz';

const ConvertButton: React.FC = () => {
  const setTikz = useSetRecoilState(tikzState);
  const setTexUrl = useSetRecoilState(texUrlState);
  const canvas = useRecoilValue(canvasState);

  function b64toBlob(base64: string) {
    const bin = atob(base64.replace(/^.*,/, ''));
    const buffer = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; i++) {
      buffer[i] = bin.charCodeAt(i);
    }
    // Blobを作成
    const blob = new Blob([buffer.buffer], {
      type: 'image/png',
    });
    return blob;
  }

  async function handleToTikz() {
    if (canvas) {
      const svgBlob = new Blob([canvas.toSVG()], { type: 'image/svg+xml' });
      const formData = new FormData();
      formData.append('svg_file', svgBlob);
      const res = await axios.post('http://localhost:5000/file', formData);
      setTikz(res.data);
      const texBlob = new Blob([res.data], { type: 'application/x-tex' });
      setTexUrl(URL.createObjectURL(texBlob));
      alert('succeeded!');
    }
  }

  async function handleToImage() {
    if (canvas) {
      const formData = new FormData();
      formData.append('svg_file', b64toBlob(canvas.toDataURL()));
      const res = await axios.post('http://localhost:5000/file', formData);
      setTexUrl(res.data);
      alert('succeeded!');
    }
  }

  return (
    <>
      <button
        className='rounded-lg bg-purple-500 mx-1 text-white mb-4 w-full p-2 hover:bg-purple-600'
        onClick={handleToImage}
      >
        pngにして変換!
      </button>
      <button
        className='rounded-lg bg-purple-500 mx-1 text-white mb-4 w-full p-2 hover:bg-purple-600'
        onClick={handleToTikz}
      >
        svgにして変換!
      </button>
    </>
  );
};

export default ConvertButton;
