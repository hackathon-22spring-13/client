import { useEffect, useState } from 'react';
import { MdContentCopy } from 'react-icons/md';
import { useRecoilValue } from 'recoil';
import { texUrlState } from '../recoil/atoms/texUrl';
import { tikzState, tikzTextState } from '../recoil/atoms/tikz';

const Result: React.FC = () => {
  const [isCopied, setIsCopied] = useState(false);
  const texUrl = useRecoilValue(texUrlState);
  const tikz = useRecoilValue(tikzState);
  const tikzText = useRecoilValue(tikzTextState);

  function handleCopy() {
    navigator.clipboard.writeText(tikz);
    setIsCopied(true);
  }
  function handleDownload(e: React.MouseEvent<HTMLButtonElement>) {
    if (texUrl === '') {
      alert('まずは変換してください');
      e.preventDefault();
    }
  }
  useEffect(() => {
    setIsCopied(false);
  }, [tikz]);

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
        <button
          className='rounded-md bg-purple-500 text-white p-2 top-15 right-2 absolute hover:bg-purple-600'
          onClick={(e) => handleDownload(e)}
        >
          <a download='tikz.tex' href={texUrl}>
            ダウンロード
          </a>
        </button>
        <p className='border bg-dark-100 min-h-32 p-1 text-light-400 whitespace-pre-wrap'>
          {tikzText}
        </p>
      </div>
    </section>
  );
};

export default Result;
