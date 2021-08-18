import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { DataLayer } from './components/DataLayer'
import { initialState } from './components/reducer';

ReactDOM.render(
  <React.StrictMode>
    <DataLayer initialState={initialState} reducer>
      <App />
    </DataLayer>

  </React.StrictMode>,
  document.getElementById('root')
);


