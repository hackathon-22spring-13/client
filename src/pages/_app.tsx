import '../styles/globals.css';
import type { AppProps } from 'next/app';
import 'windi.css';
import { RecoilRoot } from 'recoil';
import CanvasProvider from '../components/CanvasProvider';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <CanvasProvider>
        <Component {...pageProps} />
      </CanvasProvider>
    </RecoilRoot>
  );
}

export default MyApp;
