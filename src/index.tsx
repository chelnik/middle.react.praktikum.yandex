import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import * as serviceWorker from './serviceWorker';

import MyInfo from './components/MyInfo';

ReactDOM.render(
  <React.StrictMode>
    <MyInfo />
  </React.StrictMode>,
  document.getElementById('root')
);


serviceWorker.register();
