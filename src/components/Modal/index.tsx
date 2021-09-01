import React, { cloneElement, FunctionComponent, ReactFragment, ReactNode } from 'react';
import { createPortal, render, unmountComponentAtNode } from 'react-dom';
import './style.scss';
import Button from '../Button';

interface Prop {
	title?: string;
	visible: boolean;
	/** 是否模态对话框 */
	closeOnModal?: boolean;
	/** 是否插入body节点 */
	appendToBody?: boolean;
	onOk: () => void;
	onCancel: () => void;
}

const Modal: FunctionComponent<Prop> = props => {
	const { title, closeOnModal, appendToBody, onCancel, onOk } = props;

	const modal =
		props.visible === true ? (
			<div>
				<div
					className="modal-mask"
					onClick={() => {
						if (closeOnModal) onCancel();
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
							<div className="modal-body">{props.children}</div>
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
	return appendToBody ? createPortal(modal, document.body) : modal;
};

const alert = (title: string, context: string | ReactNode | ReactFragment, option?: any) => {
	const component = (
		<Modal
			title={title}
			visible={true}
			onOk={() => {
				render(cloneElement(component, { visible: false }), div);
				unmountComponentAtNode(div);
				div.remove();
			}}
			onCancel={() => {
				render(cloneElement(component, { visible: false }), div);
				unmountComponentAtNode(div);
				div.remove();
			}}
		>
			{context}
		</Modal>
	);
	const div = document.createElement('div');
	document.body.append(div);
	render(component, div);
};

Modal.defaultProps = {
	closeOnModal: true
};

export default Modal;
export { alert };
