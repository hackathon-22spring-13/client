export interface Tool {
  name: string;
  id: Tools;
  icon: React.ReactElement;
  items: string[];
  function: () => void;
}
export type Tools = 'color' | 'weight' | 'object' | 'line' | 'clear' | '';

export type Mode = 'draw' | 'select';
