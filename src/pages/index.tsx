import axios from 'axios';
import type { NextPage } from 'next';
import { useContext, useState } from 'react';
import { useSetRecoilState } from 'recoil';
import Canvas from '../components/Canvas';
import { CanvasContext } from '../components/CanvasProvider';
import Result from '../components/Result';
import Button from '../components/shared/Button';
import { shouldShowModalState } from '../recoil/atoms/modal';

const Home: NextPage = () => {
  const [tikz, setTikz] = useState('');
  const setShouldShowModal = useSetRecoilState(shouldShowModalState);
  const { canvas } = useContext(CanvasContext);
  function handleToSvg() {
    if (canvas) {
      const SVG = canvas.toSVG();
      alert(SVG);
      console.log(SVG);
    }
  }
  async function handleToTikz() {
    const res = await axios.get('/api/ping');
    setTikz(res.data);
    alert(res.data);
  }
  return (
    <div onClick={() => setShouldShowModal(false)}>
      <section className='mx-auto w-320'>
        <h1 className='my-8 text-center text-3xl'>I Love TikZ</h1>
        <div className='flex'>
          <div className='border rounded-lg h-160 shadow-lg w-320'>
            <Canvas />
          </div>
        </div>
        <div className='mt-2 text-right w-full'>
          <Button onClick={handleToSvg}>SVGに変換！</Button>
          <Button onClick={handleToTikz}>TikZに変換！</Button>
        </div>
        <Result result={tikz} />
      </section>
    </div>
  );
};

export default Home;
