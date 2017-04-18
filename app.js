//lib
import React from 'react';
import ReactDOM from 'react-dom';

import './css/style.css';
import Scoreboard from './components/Scoreboard.js'


ReactDOM.render(
    <Application initialPlayers={PLAYERS}/>, document.querySelector('#container'));