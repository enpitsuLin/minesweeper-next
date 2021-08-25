import React, { Component } from 'react';
import './style.scss';
import Button from '../Button';

interface Prop {
	title?: string;
	visible: boolean;
	/** 是否模态对话框 */
	closeOnModal?: boolean;
	onOk: () => void;
	onCancel: () => void;
}

export default class Modal extends Component<Prop> {
	constructor(props: Prop) {
		super(props);
	}

	render() {
		const { title, closeOnModal, onCancel, onOk } = this.props;

		return this.props.visible === true ? (
			<div>
				<div
					className="modal-mask"
					onClick={() => {
						if (closeOnModal || closeOnModal === undefined) onCancel();
					}}
				/>
				<div className="modal-wrap" role="dialog">
					<div className="modal">
						<div className="modal-content">
							<button type="button" className="modal-close" aria-label="Close" onClick={onCancel.bind(this)}>
								<span className="modal-close-x">
									<i className="icon-close"></i>
								</span>
							</button>
							<div className="modal-header">
								<div className="modal-title">{title}</div>
							</div>
							<div className="modal-body">{this.props.children}</div>
							<div className="modal-footer">
								<Button onClick={onCancel.bind(this)}>
									<span>取消</span>
								</Button>
								<Button onClick={onOk.bind(this)}>
									<span>确定</span>
								</Button>
							</div>
						</div>
					</div>
				</div>
			</div>
		) : null;
	}
}
