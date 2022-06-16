import { useEffect, useState } from 'react';
import { MdContentCopy } from 'react-icons/md';
interface Props {
  result: string;
}

const Result: React.FC<Props> = ({ result }) => {
  const [isCopied, setIsCopied] = useState(false);
  function handleCopy() {
    navigator.clipboard.writeText(result);
    setIsCopied(true);
  }
  useEffect(() => {
    setIsCopied(false);
  }, [result]);
  return (
    <section>
      <h2>変換結果</h2>
      <div className='relative'>
        <button
          className='rounded-md bg-purple-400 text-white p-2 top-2 right-2 absolute hover:bg-purple-500'
          onClick={handleCopy}
        >
          <MdContentCopy />
          {isCopied ? 'コピーしました！' : 'コピー'}
        </button>
        <p className='border h-32 whitespace-pre-wrap'>{result}</p>
      </div>
    </section>
  );
};

export default Result;
