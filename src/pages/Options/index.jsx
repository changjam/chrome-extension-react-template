import React from 'react';
import { createRoot } from 'react-dom/client';
import App from '../../components/App';
import Options from './Options';
import '../../styles/global.css';

createRoot(document.getElementById('options-root')).render(
  <React.StrictMode>
    <App>
      <Options />
    </App>
  </React.StrictMode>
);