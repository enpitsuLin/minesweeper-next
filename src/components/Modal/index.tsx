import React, { Component } from 'react';
import './style.scss';
interface Prop {
	title: string;
	visible: boolean;
	onOk: () => void;
	onCancel: () => void;
}

export default class Modal extends Component<Prop> {
	constructor(props: Prop) {
		super(props);
	}

	render() {
		return this.props.visible == true ? (
			<>
				<div className="modal-mask" />
				<div className="modal">
					<div className="modal__header">
						<div className="modal__title">{this.props.title}</div>
						<div className="modal__close" onClick={this.props.onCancel}>
							X
						</div>
					</div>
					<div className="modal__content">{this.props.children}</div>
					<div className="modal__footer">这里是footer</div>
				</div>
			</>
		) : null;
	}
}
