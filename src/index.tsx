import React from 'react';
import { render } from 'react-dom';
import App from './App';
import { GlobalStyle } from './style';

const root = document.querySelector('#app');
/** 禁用右键菜单 */
document.addEventListener('contextmenu', e => {
	e.preventDefault();
});

render(
	<>
		<GlobalStyle />
		<App />
	</>,
	root
);
