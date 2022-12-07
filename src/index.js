import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Colors from './styles/settings/Colors';
import Reset from "./styles/Reset";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Reset />
    <Colors />
    <App />
  </React.StrictMode>
);
