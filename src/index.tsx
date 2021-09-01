import React from 'react';
import { render } from 'react-dom';
import App from './App';
import './style/index.scss';

const root = document.querySelector('#app');
/** 禁用右键菜单 */
document.addEventListener('contextmenu', e => {
	e.preventDefault();
});

render(<App />, root);
