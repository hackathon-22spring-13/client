import type { NextPage } from 'next';
import Canvas from '../components/Canvas';

const Home: NextPage = () => {
  return (
    <div className='mx-auto w-300'>
      <h1 className='my-8 text-center text-3xl'>I Love TikZ</h1>
      <div className='flex'>
        <div className='border h-160 w-320'>
          <Canvas />
        </div>
      </div>
      <div className='mt-2 text-right'>
        <button className='rounded-lg bg-purple-400 text-white p-2'>TikZに変換！</button>
      </div>
      <section>
        <h2>変換結果</h2>
        <p className='border'>{/*変換後テキストを表示*/}</p>
      </section>
    </div>
  );
};

export default Home;
