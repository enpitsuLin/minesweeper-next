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
	const { size, loading, icon, type, block, onClick } = props;
	const cls = `l-button${size ? ' button-' + size : ''}${type ? ` ${type}` : ''} ${block ? ' block' : ''}`;

	return (
		<button className={cls} onClick={onClick.bind(this)}>
			{props.children}
		</button>
	);
};

export default Button;
