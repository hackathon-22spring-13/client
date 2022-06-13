type Tools = 'color' | 'weight' | 'object' | 'line' | 'clear' | '';

interface Props {
  selectedTool: Tools;
  toolId: Tools;
  menuItemList: string[];
}
const MenuModal: React.FC<Props> = ({ selectedTool, toolId, menuItemList }) => {
  return (
    <div
      className={`${
        selectedTool === toolId ? '' : 'hidden'
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
            <button className='h-full w-full'>{menuItem}</button>
            <div className='bg-white h-0.2' />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuModal;
