import { useContext, useState } from 'react';
import { GiPencilRuler } from 'react-icons/gi';
import { IoShapes } from 'react-icons/io5';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { shouldShowModalState } from '../recoil/atoms/modal';
import { selectedShapeState } from '../recoil/atoms/object';
import { selectedToolState } from '../recoil/atoms/tools';
import { changeLine } from '../tools/line';
import { objects } from '../tools/object';
import { Shape, Tool, ToolOption, Tools } from '../types';
import { CanvasContext } from './CanvasProvider';
import ConvertButton from './ConvertButton';
import MenuModal from './MenuModal';
import ModeButton from './ModeButton';

const RightToolBar: React.FC = () => {
  const { canvas } = useContext(CanvasContext);
  const [selectedTool, setSelectedTool] = useRecoilState(selectedToolState);
  const [menuItemList, setMenuItemList] = useState<ToolOption[]>();
  const [shouldShowModal, setShouldShowModal] = useRecoilState(shouldShowModalState);
  const setSelectedShapeState = useSetRecoilState(selectedShapeState);
  const tools: Tool[] = [
    //todo:アサーションを消して型チェックする
    {
      name: 'オブジェクト',
      id: 'object',
      icon: <IoShapes size={40} />,
      items: objects,
      function: (option: string) => setSelectedShapeState(option as Shape),
    },
    {
      name: '直線',
      id: 'line',
      icon: <GiPencilRuler size={40} />,
      items: [],
      function: () => changeLine(canvas),
    },
  ];
  function handleSelectTool(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    toolId: Tools,
    toolItems: ToolOption[],
  ) {
    e.stopPropagation();
    if (canvas === null) {
      return;
    }
    if (toolId === 'clear') {
      const result = confirm('キャンバスの内容をクリアしてもよろしいですか？');
      if (result) {
        canvas.clear();
      }
    } else {
      setSelectedTool(toolId);
      setMenuItemList(toolItems);
      setShouldShowModal(true);
    }
  }

  return (
    <div className='border flex flex-col border-r-gray-300 w-24'>
      <ul className='list-none'>
        <li>
          <ModeButton />
        </li>
        {tools.map((tool) => (
          <li
            className={`border-b h-24 relative ${
              selectedTool === tool.id ? 'shadow bg-gray-200' : 'bg-gray-100'
            }`}
            key={tool.name}
          >
            <button
              className='h-full w-full'
              onClick={(e) => handleSelectTool(e, tool.id, tool.items)}
            >
              <>
                {tool.icon}
                <p>{tool.name}</p>
              </>
            </button>
            {menuItemList && shouldShowModal && (
              <MenuModal location='right' menuItemList={menuItemList} tool={tool} />
            )}
          </li>
        ))}
      </ul>
      <div className='flex-grow flex items-end'>
        <ConvertButton />
      </div>
    </div>
  );
};

export default RightToolBar;
