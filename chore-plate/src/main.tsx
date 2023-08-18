import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { worker } from './mocks/browser.ts';

if (import.meta.env.MODE === 'msw')
  worker.start({
    onUnhandledRequest: 'bypass',
  });

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
