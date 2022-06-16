import type { NextPage } from 'next';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import Canvas from '../components/Canvas';
import Result from '../components/Result';
import { lineState } from '../recoil/atoms/line';
import { shouldShowModalState } from '../recoil/atoms/modal';
import { tikzState } from '../recoil/atoms/tikz';
import { selectedToolState } from '../recoil/atoms/tools';

const Home: NextPage = () => {
  const [shouldShowModal, setShouldShowModal] = useRecoilState(shouldShowModalState);
  const setSelectedTool = useSetRecoilState(selectedToolState);
  const tikz = useRecoilValue(tikzState);
  const line = useRecoilValue(lineState);

  function handleCloseModal() {
    if (shouldShowModal && line.x !== -1 && line.y !== -1) {
      setShouldShowModal(false);
      setSelectedTool('');
    }
  }
  return (
    <div onClick={handleCloseModal}>
      <section className='mx-auto w-320'>
        <h1 className='my-8 text-center text-3xl'>I Love TikZ</h1>
        <div className='border rounded-lg h-160 shadow-lg w-320'>
          <Canvas />
        </div>
        <Result result={tikz} />
      </section>
    </div>
  );
};

export default Home;
