import './main.css';
import React from 'react';
import App from './components/App'
import State from './state'


React.render(<App tree={State} />, document.querySelector('#app'))
