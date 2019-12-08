import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import Game from './Game';

const App = () => {
  return <Game />;
};

ReactDOM.render(<App />, document.querySelector('#root'));