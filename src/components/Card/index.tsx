import React, { FunctionComponent, HTMLAttributes } from 'react';
import ClassNames from 'classnames';
import './style.scss';

interface Props extends HTMLAttributes<HTMLDivElement> {
	title?: string;
	border?: boolean;
}

const Card: FunctionComponent<Props> = props => {
	const { title, border, ...rest } = props;
	const cls = ClassNames('l-card', { 'l-card-bordered': border });
	return (
		<div {...rest} className={cls}>
			{title && (
				<div className="l-card-head">
					<div className="l-card-head-wrapper">
						<div className="l-card-head-title">{title}</div>
						<div className="l-card-extra">
							<span>extra</span>
						</div>
					</div>
				</div>
			)}
			<div className="l-card-body">{props.children}</div>
		</div>
	);
};

Card.defaultProps = {
	border: true
};

export default Card;
