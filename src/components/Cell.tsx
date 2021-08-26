import React from 'react';
import styled from 'styled-components';

const StyledCell = styled.div`
	user-select: none;
	background-color: rgba(0, 0, 0, 0.4);
	color: #eeeeee;
	border-radius: 3px;
	margin: 2px;
	width: 32px;
	height: 32px;
	line-height: 32px;
	cursor: pointer;
	text-align: center;
	transition-duration: 0.4s;

	&.open {
		background-color: rgba(0, 0, 0, 0.7);
		&.mine {
			background-color: rgba(100, 0, 0, 0.7);
		}
		&.mark {
			background-color: rgb(138, 106, 2);
		}
	}
	&.mark {
		background-color: rgba(198, 192, 147, 0.4);
		&:hover {
			background-color: rgba(83, 83, 71, 0.5);
		}
	}
	&:hover {
		box-shadow: inset -1px -1px 8px #333;
		background-color: rgba(0, 0, 0, 0.3);
	}
`;

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

function Cell(props: Props) {
	const { row, col, isOpen, isMark, isMine, adjMine, handleEvent } = props;

	return (
		<StyledCell
			className={`cell${isOpen ? ' open' : ''}${isMark ? ' mark' : ''}${isMine ? ' mine' : ''}`}
			onClick={() => {
				handleEvent('open');
			}}
			onContextMenu={e => {
				e.preventDefault();
				handleEvent('mark');
			}}
		>
			{isOpen ? (isMine ? '💣' : adjMine) : isMark ? '🚩' : ''}
		</StyledCell>
	);
}

export default Cell;
