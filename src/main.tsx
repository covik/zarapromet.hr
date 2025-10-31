import { App } from './App.tsx';
import { ViteReactSSG } from 'vite-react-ssg/single-page';

export const createRoot = ViteReactSSG(<App />);
