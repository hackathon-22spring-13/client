interface Props {
  result: string;
}

const Result: React.FC<Props> = ({ result }) => {
  return (
    <section>
      <h2>変換結果</h2>
      <p className='border h-32 whitespace-pre-wrap'>{result}</p>
    </section>
  );
};

export default Result;
