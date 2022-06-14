import { Tool, ToolOption, Tools } from '../types';

interface Props {
  selectedTool: Tools;
  menuItemList: ToolOption[];
  tool: Tool;
}
const MenuModal: React.FC<Props> = ({ selectedTool, menuItemList, tool }) => {
  return (
    <div
      className={`${
        selectedTool === tool.id ? '' : 'hidden'
      } bg-gray-200 w-32 absolute top-0 left-24 z-2 rounded-md shadow`}
    >
      <ul>
        {menuItemList.map((menuItem, index) => (
          <li
            className={`h-8 hover:bg-gray-300 ${index === 0 ? 'rounded-t-md' : ''} ${
              index === menuItemList.length - 1 ? 'rounded-b-md' : ''
            }`}
            key={index}
          >
            <button className='h-full w-full' onClick={() => tool.function(menuItem.value)}>
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
