export interface Tool {
  name: string;
  id: Tools;
  icon: React.ReactElement;
  items: ToolOption[];
  function: (option: string) => void;
}
export type Tools = 'color' | 'weight' | 'object' | 'line' | 'clear' | '';

export type Mode = 'draw' | 'select';

export interface ToolOption {
  name: string;
  value: string;
}
