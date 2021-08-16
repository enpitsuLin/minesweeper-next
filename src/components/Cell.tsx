import React from 'react';

interface Props {
	row: number;
	col: number;
	isOpen: boolean;
	isMark: boolean;
	isMine: boolean;
	adjMine: number;
	handleOpen?: (row: number, col: number) => void;
}

function Cell(props: Props) {
	const { row, col, isOpen, isMark, isMine, adjMine, handleOpen } = props;
	return (
		<div className={`cell${isOpen ? ' open' : ''}${isMark ? ' mark' : ''}`}>
			{isOpen ? (isMine ? '💣' : adjMine) : isMark ? '🚩' : ''}
		</div>
	);
}

export default Cell;
