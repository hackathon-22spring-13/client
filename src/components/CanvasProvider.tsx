import { Canvas } from 'fabric/fabric-impl';
import { createContext, Dispatch, SetStateAction, useState } from 'react';

interface Props {
  children: React.ReactNode;
}
interface CanvasContextInterface {
  canvas: fabric.Canvas | null;
  setCanvas: Dispatch<SetStateAction<Canvas | null>>;
}

export const CanvasContext = createContext<CanvasContextInterface>({} as CanvasContextInterface);

const CanvasProvider: React.FC<Props> = ({ children }) => {
  const [canvas, setCanvas] = useState<fabric.Canvas | null>(null);
  return <CanvasContext.Provider value={{ canvas, setCanvas }}>{children}</CanvasContext.Provider>;
};

export default CanvasProvider;
