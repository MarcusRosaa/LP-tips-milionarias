import React from 'react'
import ReactDOM from 'react-dom/client';
import { App } from './app';
import GlobalStyles from './styles/global';

const rootElement = document.getElementById('root');

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <GlobalStyles />
      <App />
    </React.StrictMode>,
  )
}

