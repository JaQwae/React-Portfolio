// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
// import 'bootstrap/dist/css/bootstrap.min.css';

// ReactDOM.render(<App />, document.getElementById('root'));

import React from 'react';
import {createRoot} from 'react-dom/client';
import App from './App';
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(<App />);