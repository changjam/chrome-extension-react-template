import React from 'react';
import { createRoot } from 'react-dom/client';
import App from '../../components/App';
import Popup from './Popup';
import '../../styles/global.css';

createRoot(document.getElementById('popup-root')).render(
  <React.StrictMode>
    <App>
      <Popup />
    </App>
  </React.StrictMode>
);