import type { NextPage } from 'next';
import { useRecoilState, useRecoilValue } from 'recoil';
import Canvas from '../components/Canvas';
import ManualModal from '../components/ManualModal';
import Result from '../components/Result';
import { lineState } from '../recoil/atoms/line';
import { shouldShowManualModalState, shouldShowMenuModalState } from '../recoil/atoms/modal';
import { tikzState } from '../recoil/atoms/tikz';
import { selectedToolState } from '../recoil/atoms/tools';

const Home: NextPage = () => {
  const [shouldShowMenuModal, setShouldShowMenuModal] = useRecoilState(shouldShowMenuModalState);
  const [selectedTool, setSelectedTool] = useRecoilState(selectedToolState);
  const [shouldShowManualModal, setShouldShowManualModal] = useRecoilState(
    shouldShowManualModalState,
  );
  const tikz = useRecoilValue(tikzState);
  const line = useRecoilValue(lineState);

  function handleCloseModal() {
    if (shouldShowMenuModal) {
      if (selectedTool === 'line' && line.x === -1 && line.y === -1) {
        return;
      }
      setShouldShowMenuModal(false);
      setSelectedTool('');
    }
  }
  return (
    <div onClick={handleCloseModal}>
      <section className='mx-auto w-320 relative'>
        <h1 className='my-8 text-center text-3xl'>I Love TikZ</h1>
        <button
          className='rounded-lg bg-purple-500 text-white p-2 top-0 right-0 absolute hover:bg-purple-600'
          onClick={() => setShouldShowManualModal(true)}
        >
          説明書を表示
        </button>
        <div className='border rounded-lg h-160 shadow-lg w-320'>
          <Canvas />
        </div>
        <Result result={tikz} />
      </section>
      {shouldShowManualModal && <ManualModal />}
    </div>
  );
};

export default Home;
