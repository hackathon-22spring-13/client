export interface Tool {
  name: string;
  id: Tools;
  icon: React.ReactElement;
  items: ToolOption[];
  function: (option: string) => void;
}
export type Tools = 'color' | 'weight' | 'object' | 'line' | 'clear' | '';

export type Mode = 'draw' | 'select';

export type Shape = 'rect' | 'circle' | 'ellipse' | 'triangle' | '';

export type Color =
  | 'red'
  | 'blue'
  | 'green'
  | 'yellow'
  | 'orange'
  | 'purple'
  | 'pink'
  | 'brown'
  | 'black'
  | 'white'
  | '';

export interface ToolOption {
  name: string;
  value: string;
}

export interface Line {
  x: number;
  y: number;
}
