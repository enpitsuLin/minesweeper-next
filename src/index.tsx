import React from 'react';
import { render } from 'react-dom';
import App from './App';
import { GlobalStyle } from './style';

const root = document.querySelector('#app');

render(
	<>
		<GlobalStyle />
		<App />
	</>,
	root
);
