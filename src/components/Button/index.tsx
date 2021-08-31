import React, { FunctionComponent } from 'react';
import './style.scss';

interface ButtonProps {
	block?: boolean;
	icon?: string;
	loading?: boolean;
	size?: 'large' | 'middle' | 'small';
	type?: 'primary' | 'text' | 'default';
	onClick?: () => void;
}

const Button: FunctionComponent<ButtonProps> = props => {
	const cls = `l-button${props.size ? ' button-' + props.size : ''}${props.type ? ` ${props.type}` : ''} ${
		props.block ? ' block' : ''
	}`;

	return (
		<button className={cls} onClick={props.onClick ? props.onClick.bind(this) : null}>
			{props.children}
		</button>
	);
};

export default Button;
