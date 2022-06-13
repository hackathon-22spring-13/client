import { useState } from 'react';
import { GiPencilRuler } from 'react-icons/gi';
import { IoShapes, IoTrash } from 'react-icons/io5';
import { MdColorLens, MdLineWeight } from 'react-icons/md';
import { useRecoilState, useRecoilValue } from 'recoil';
import { canvasState } from '../recoil/atoms/canvas';
import { shouldShowModalState } from '../recoil/atoms/modal';
import { selectedToolState } from '../recoil/atoms/tools';
import { changeColor, colors } from '../tools/color';
import { changeLine } from '../tools/line';
import { changeObject, objects } from '../tools/object';
import { changeWeight, weights } from '../tools/weight';
import MenuModal from './MenuModal';

interface Tool {
  name: string;
  id: Tools;
  icon: React.ReactElement;
  items: string[];
  function: () => void;
}
type Tools = 'color' | 'weight' | 'object' | 'line' | 'clear' | '';

const ToolBar: React.FC = () => {
  const canvas = useRecoilValue(canvasState);
  const [selectedTool, setSelectedTool] = useRecoilState(selectedToolState);
  const [menuItemList, setMenuItemList] = useState<string[]>();
  const [shouldShowModal, setShouldShowModal] = useRecoilState(shouldShowModalState);
  const tools: Tool[] = [
    {
      name: '色',
      id: 'color',
      icon: <MdColorLens size={40} />,
      items: colors,
      function: () => changeColor,
    },
    {
      name: '太さ',
      id: 'weight',
      icon: <MdLineWeight size={40} />,
      items: weights,
      function: () => changeWeight,
    },
    {
      name: 'オブジェクト',
      id: 'object',
      icon: <IoShapes size={40} />,
      items: objects,
      function: () => changeObject,
    },
    {
      name: '直線',
      id: 'line',
      icon: <GiPencilRuler size={40} />,
      items: [],
      function: () => changeLine,
    },
    {
      name: 'クリア',
      id: 'clear',
      icon: <IoTrash size={40} />,
      items: [],
      function: () => changeLine,
    },
  ];
  function handleSelectTool(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    toolId: Tools,
    toolItems: string[],
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
    <div className='border border-r-gray-300 w-24 grow'>
      <ul className='list-none'>
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
              <MenuModal menuItemList={menuItemList} selectedTool={selectedTool} toolId={tool.id} />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToolBar;
