import React from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { shouldShowModalState } from '../recoil/atoms/modal';
import { selectedToolState } from '../recoil/atoms/tools';
import { Tool, ToolOption, Tools } from '../types';

interface Props {
  menuItemList: ToolOption[];
  tool: Tool;
  location: 'left' | 'right';
}
const MenuModal: React.FC<Props> = ({ menuItemList, tool, location }) => {
  const [selectedTool, setSelectedTool] = useRecoilState(selectedToolState);
  const setShouldShowModal = useSetRecoilState(shouldShowModalState);
  function handleClick(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    toolId: Tools,
    onClick: (value: string) => void,
    value: string,
  ) {
    e.stopPropagation();
    onClick(value);
    if (toolId === 'color' || toolId === 'weight') {
      setSelectedTool('');
    }
    setShouldShowModal(false);
  }
  return (
    <div
      className={`${selectedTool === tool.id ? '' : 'hidden'} ${
        location === 'left' ? 'left-25' : 'right-25'
      } bg-gray-200 w-32 absolute top-2 z-2 rounded-md shadow`}
    >
      <ul>
        {menuItemList.map((menuItem, index) => (
          <li
            className={`h-8 hover:bg-gray-300 ${index === 0 ? 'rounded-t-md' : ''} ${
              index === menuItemList.length - 1 ? 'rounded-b-md' : ''
            }`}
            key={index}
          >
            <button
              className='h-full w-full'
              onClick={(e) => handleClick(e, tool.id, tool.function, menuItem.value)}
            >
              {menuItem.name}
            </button>
            <div className='bg-white h-0.2' />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuModal;
