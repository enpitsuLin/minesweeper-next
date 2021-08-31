import React, { FunctionComponent } from 'react';
import './style.scss';

export interface CellItem {
	row: number;
	col: number;
	isOpen: boolean;
	isMark: boolean;
	isMine: boolean;
	adjMine: number;
}

interface Props extends CellItem {
	handleEvent?: (type: 'mark' | 'open') => void;
}

const Cell: FunctionComponent<Props> = (props: Props) => {
	const { row, col, isOpen, isMark, isMine, adjMine, handleEvent } = props;

	return (
		<div
			className={`cell${isOpen ? ' open' : ''}${isMark ? ' mark' : ''}${isMine ? ' mine' : ''}`}
			onClick={() => {
				handleEvent('open');
			}}
			onContextMenu={e => {
				e.preventDefault();
				handleEvent('mark');
			}}
			data-row={row}
			data-col={col}
		>
			{isOpen ? (isMine ? '💣' : adjMine) : isMark ? '🚩' : ''}
		</div>
	);
};
export default Cell;
