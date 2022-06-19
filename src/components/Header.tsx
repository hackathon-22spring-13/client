import type { NextPage } from 'next';
import { useSetRecoilState } from 'recoil';
import { shouldShowManualModalState } from '../recoil/atoms/modal';

const Home: NextPage = () => {
  const setShouldShowManualModal = useSetRecoilState(shouldShowManualModalState);
  return (
    <>
      <h1 className='my-8 text-center text-3xl'>I Love TikZ</h1>
      <button
        className='rounded-lg bg-purple-500 text-white p-2 top-0 left-0 absolute hover:bg-purple-600'
        onClick={() => setShouldShowManualModal(true)}
      >
        説明書を表示
      </button>
    </>
  );
};

export default Home;
