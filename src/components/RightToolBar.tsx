import { useState } from 'react';
import { GiPencilRuler } from 'react-icons/gi';
import { IoShapes } from 'react-icons/io5';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { canvasState } from '../recoil/atoms/canvas';
import { shouldShowModalState } from '../recoil/atoms/modal';
import { selectedShapeState } from '../recoil/atoms/object';
import { selectedToolState } from '../recoil/atoms/tools';
import { objects } from '../tools/object';
import { Shape, Tool, ToolOption, Tools } from '../types';
import ConvertButton from './ConvertButton';
import MenuModal from './MenuModal';
import ModeButton from './ModeButton';

const RightToolBar: React.FC = () => {
  const canvas = useRecoilValue(canvasState);
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
      function: () => console.log('change line'),
    },
  ];
  function handleSelectTool(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    toolId: Tools,
    toolItems: ToolOption[],
  ) {
    e.stopPropagation();
    setSelectedTool(toolId);
    if (canvas !== null) {
      canvas.isDrawingMode = false;
    }
    setMenuItemList(toolItems);
    setShouldShowModal(true);
  }

  return (
    <div className='border flex flex-col border-r-gray-300 w-24'>
      <ul className='list-none'>
        <li>
          <ModeButton />
        </li>
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
