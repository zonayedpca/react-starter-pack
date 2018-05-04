import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

import './index.css';

const Root = () => {
  return (
    <App />
  )
}

ReactDOM.render(<Root />, document.getElementById('app'));
