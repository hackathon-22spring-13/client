import { changeColor } from '../tools/color';
import { changeLine } from '../tools/line';
import { changeObject } from '../tools/object';
import { changeWeight } from '../tools/weight';

interface Tool {
  name: string;
  icon: string;
  function: () => void;
}
const ToolBar: React.FC = () => {
  const tools: Tool[] = [
    {
      name: '色',
      icon: '',
      function: () => changeColor,
    },
    {
      name: '太さ',
      icon: '',
      function: () => changeWeight,
    },
    {
      name: 'オブジェクト',
      icon: '',
      function: () => changeObject,
    },
    {
      name: '直線',
      icon: '',
      function: () => changeLine,
    },
  ];
  return (
    <ul className='list-none'>
      {tools.map((tool) => (
        <li className='border bg-red-200 h-24' key={tool.name}>
          <button className='h-full w-full' onClick={tool.function}>
            {tool.name}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ToolBar;
