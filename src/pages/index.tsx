import type { NextPage } from 'next';
import { useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import Canvas from '../components/Canvas';
import Header from '../components/Header';
import ManualModal from '../components/ManualModal';
import Result from '../components/Result';
import { canvasState } from '../recoil/atoms/canvas';
import { shouldShowManualModalState, shouldShowMenuModalState } from '../recoil/atoms/modal';
import { selectedToolState } from '../recoil/atoms/tools';
import { clearSelectedObjects } from '../tools/clear';

const Home: NextPage = () => {
  const [shouldShowMenuModal, setShouldShowMenuModal] = useRecoilState(shouldShowMenuModalState);
  const [selectedTool, setSelectedTool] = useRecoilState(selectedToolState);
  const shouldShowManualModal = useRecoilValue(shouldShowManualModalState);
  const canvas = useRecoilValue(canvasState);
  function handleCloseModal() {
    if (shouldShowMenuModal) {
      if (selectedTool === 'line') {
        return;
      }
      setShouldShowMenuModal(false);
      setSelectedTool('');
    }
  }
  const handleKeydown = (e: KeyboardEvent) => {
    if (canvas !== null && e.key === 'Delete') {
      clearSelectedObjects(canvas);
    }
    if (e.key === 'Escape') {
      setSelectedTool('');
    }
  };
  useEffect(() => {
    document.addEventListener('keydown', handleKeydown, false);
  }, [canvas]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div onClick={handleCloseModal}>
      <section className='mx-auto w-320 relative'>
        <Header />
        <div className='border rounded-lg h-160 shadow-lg w-320'>
          <Canvas />
        </div>
        <Result />
      </section>
      {shouldShowManualModal && <ManualModal />}
    </div>
  );
};

export default Home;
