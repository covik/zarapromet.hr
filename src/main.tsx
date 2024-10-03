import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App.tsx';
import { BaseStyle } from './BaseStyle';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BaseStyle>
            <App />
        </BaseStyle>
    </StrictMode>,
);
