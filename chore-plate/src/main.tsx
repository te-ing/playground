import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { worker } from './mocks/browser.ts';
import { QueryClient, QueryClientProvider } from 'react-query';

if (import.meta.env.MODE === 'msw')
  worker.start({
    onUnhandledRequest: 'bypass',
  });
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>,
);
