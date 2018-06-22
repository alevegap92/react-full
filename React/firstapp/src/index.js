//index.js carga la aplicacion
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker'; //simula datos de manera local

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
