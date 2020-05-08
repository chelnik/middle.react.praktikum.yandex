import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import App4 from "./components/App4"

ReactDOM.render(
  <React.StrictMode>
    <App4 />
  </React.StrictMode>,
  document.getElementById('root')
);


serviceWorker.register();
