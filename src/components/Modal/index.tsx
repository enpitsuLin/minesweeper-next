import React, { Component } from 'react';
import './style.scss';
interface Prop {
	title?: string;
	visible: boolean;
	onOk: () => void;
	onCancel: () => void;
}

export default class Modal extends Component<Prop> {
	constructor(props: Prop) {
		super(props);
	}

	render() {
		const { title } = this.props;

		return this.props.visible == true ? (
			<div>
				<div className="modal-mask"></div>
				<div className="modal-wrap" role="dialog">
					<div className="modal">
						<div className="modal-content">
							<button type="button" className="modal-close" aria-label="Close">
								<span className="modal-close-x">X</span>
							</button>
							<div className="modal-header">
								<div className="modal-title">{title}</div>
							</div>
							<div className="modal-body">{this.props.children}</div>
							<div className="modal-footer">
								<button className="button">
									<span>取消</span>
								</button>
								<button className="button">
									<span>确定</span>
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		) : null;
	}
}
