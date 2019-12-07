import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import Board from './Board';

const App = () => {
  return <Board />;
};

ReactDOM.render(<App />, document.querySelector('#root'));