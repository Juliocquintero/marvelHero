import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';

import reportWebVitals from './reportWebVitals';
import { DataProvider } from './hoc/context/dataContext';
import App from './app';

ReactDOM.render(
  <React.StrictMode>
    <DataProvider>
      <App />
    </DataProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
