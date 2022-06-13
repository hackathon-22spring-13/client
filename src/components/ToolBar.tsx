import { IoShapes } from 'react-icons//io5';
import { GiPencilRuler } from 'react-icons/gi';
import { MdColorLens, MdLineWeight } from 'react-icons/md';
import { changeColor } from '../tools/color';
import { changeLine } from '../tools/line';
import { changeObject } from '../tools/object';
import { changeWeight } from '../tools/weight';

interface Tool {
  name: string;
  icon: React.ReactElement;
  function: () => void;
}
const ToolBar: React.FC = () => {
  const tools: Tool[] = [
    {
      name: '色',
      icon: <MdColorLens size={40} />,
      function: () => changeColor,
    },
    {
      name: '太さ',
      icon: <MdLineWeight size={40} />,
      function: () => changeWeight,
    },
    {
      name: 'オブジェクト',
      icon: <IoShapes size={40} />,
      function: () => changeObject,
    },
    {
      name: '直線',
      icon: <GiPencilRuler size={40} />,
      function: () => changeLine,
    },
  ];
  return (
    <div className='border border-r-gray-300 w-24 grow'>
      <ul className='list-none'>
        {tools.map((tool) => (
          <li className='border bg-gray-100 h-24' key={tool.name}>
            <button className='h-full w-full' onClick={tool.function}>
              <>
                {tool.icon}
                <p>{tool.name}</p>
              </>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToolBar;
