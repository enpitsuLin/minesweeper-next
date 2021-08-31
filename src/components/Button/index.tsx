import React, { createRef, FunctionComponent } from 'react';
import './style.scss';
import ClassNames from 'classnames';

interface ButtonProps {
	block?: boolean;
	icon?: string;
	loading?: boolean;
	size?: 'large' | 'middle' | 'small';
	type?: 'primary' | 'text' | 'default';
	onClick?: () => void;
}

const Button: FunctionComponent<ButtonProps> = props => {
	const cls = ClassNames('l-button', props.size && 'button-' + props.size, props.type, props.block && 'block');

	const handleClick = () => {
		props.onClick ? props.onClick() : null;
	};

	return (
		<button className={cls} onClick={handleClick.bind(this)}>
			{props.children}
		</button>
	);
};

export default Button;
