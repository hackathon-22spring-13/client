import { useSetRecoilState } from 'recoil';
import { shouldShowManualModalState } from '../recoil/atoms/modal';

const WorkModal: React.FC = () => {
  const setShouldShowManualModal = useSetRecoilState(shouldShowManualModalState);
  return (
    <div
      className='h-full bg-dark-300/50 w-full top-0 left-0 z-3 fixed'
      onClick={() => setShouldShowManualModal(false)}
    >
      <div
        className='bg-white my-auto mx-auto h-2/5 shadow-lg px-12 pt-8 inset-0 w-1/3 absolute md:w-2/5'
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className='text-center text-2xl'>説明書</h2>
        <p className='mt-8'>
          <ul className='list-disc leading-relaxed'>
            <li>お絵描きモードでは自由に線を引けます。</li>
            <li>選択モードでは図形や線の選択・修正、選択したものの削除などができます。</li>
            <li>図形ツールは図形選択後、クリックした位置に図形を配置できます。</li>
            <li>直線ツールは始点をクリックした後、そのまま終点をクリックすると直線が引けます。</li>
            <li>文字ツールはクリックした位置にテキストボックスを配置できます。</li>
            <li>変換ボタンを押すと変換結果が下に表示されます。</li>
            <li>変換結果はテキストでのコピーと、TeX形式でダウンロードができます。</li>
          </ul>
        </p>
      </div>
    </div>
  );
};

export default WorkModal;
