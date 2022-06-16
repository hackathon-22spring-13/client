import { useState } from 'react';
import { IoTrash } from 'react-icons/io5';
import { MdColorLens, MdLineWeight } from 'react-icons/md';
import { useRecoilState, useRecoilValue } from 'recoil';
import { canvasState } from '../recoil/atoms/canvas';
import { shouldShowModalState } from '../recoil/atoms/modal';
import { selectedToolState } from '../recoil/atoms/tools';
import { changeColor, colors } from '../tools/color';
import { changeWeight, weights } from '../tools/weight';
import { Color, Tool, ToolOption, Tools } from '../types';
import MenuModal from './MenuModal';

const LeftToolBar: React.FC = () => {
  const canvas = useRecoilValue(canvasState);
  const [selectedTool, setSelectedTool] = useRecoilState(selectedToolState);
  const [menuItemList, setMenuItemList] = useState<ToolOption[]>();
  const [shouldShowModal, setShouldShowModal] = useRecoilState(shouldShowModalState);
  const tools: Tool[] = [
    //todo:アサーションを消して型チェックする
    {
      name: `色：${
        canvas?.freeDrawingBrush.color === 'rgb(0, 0, 0)' ? 'black' : canvas?.freeDrawingBrush.color
      }`,
      id: 'color',
      icon: <MdColorLens size={40} />,
      items: colors,
      function: (color: string) => changeColor(canvas, color as Color),
    },
    {
      name: `太さ：${canvas?.freeDrawingBrush.width}`,
      id: 'weight',
      icon: <MdLineWeight size={40} />,
      items: weights,
      function: (option: string) => changeWeight(canvas, option),
    },
    {
      name: 'クリア',
      id: 'clear',
      icon: <IoTrash size={40} />,
      items: [],
      function: () => console.log('clear'),
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
    <div className='border border-r-gray-300 w-24 grow'>
      <ul className='list-none'>
        {tools.map((tool) => (
          <li
            className={`border-b h-24 relative hover:bg-gray-200 ${
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
              <MenuModal location='left' menuItemList={menuItemList} tool={tool} />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LeftToolBar;
