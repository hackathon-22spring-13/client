import { useEffect, useState } from 'react';
import { MdContentCopy } from 'react-icons/md';
import { useRecoilValue } from 'recoil';
import { texUrlState } from '../recoil/atoms/texUrl';
interface Props {
  result: string;
}

const Result: React.FC<Props> = ({ result }) => {
  const [isCopied, setIsCopied] = useState(false);
  const texUrl = useRecoilValue(texUrlState);
  function handleCopy() {
    navigator.clipboard.writeText(result);
    setIsCopied(true);
  }
  useEffect(() => {
    setIsCopied(false);
  }, [result]);
  return (
    <section className='my-4'>
      <h2 className='text-xl'>変換結果</h2>
      <div className='relative'>
        <button
          className='rounded-md flex bg-purple-500 text-white p-2 top-2 right-2 items-center absolute hover:bg-purple-600'
          onClick={handleCopy}
        >
          <MdContentCopy />
          {isCopied ? 'コピーしました！' : 'コピー'}
        </button>
        <button className='rounded-md bg-purple-500 text-white p-2 top-2 right-20 absolute hover:bg-purple-600'>
          <a download='tikz.tex' href={texUrl}>
            ダウンロード
          </a>
        </button>
        <p className='border bg-dark-100 min-h-32 p-1 text-light-400 whitespace-pre-wrap'>
          {result}
        </p>
      </div>
    </section>
  );
};

export default Result;
