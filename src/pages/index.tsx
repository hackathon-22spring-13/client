import axios from 'axios';
import type { NextPage } from 'next';
import { useContext, useState } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import Canvas from '../components/Canvas';
import { CanvasContext } from '../components/CanvasProvider';
import Result from '../components/Result';
import Button from '../components/shared/Button';
import { shouldShowModalState } from '../recoil/atoms/modal';
import { selectedToolState } from '../recoil/atoms/tools';

const Home: NextPage = () => {
  const [tikz, setTikz] = useState('');
  const [shouldShowModal, setShouldShowModal] = useRecoilState(shouldShowModalState);
  const setSelectedTool = useSetRecoilState(selectedToolState);
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
  function handleCloseModal() {
    if (shouldShowModal) {
      setShouldShowModal(false);
      setSelectedTool('');
    }
  }
  return (
    <div onClick={handleCloseModal}>
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
