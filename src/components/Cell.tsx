import React from 'react';
import styled from 'styled-components';

const StyledCell = styled.div`
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
		<StyledCell className={`cell${isOpen ? ' open' : ''}${isMark ? ' mark' : ''}`}>
			{isOpen ? (isMine ? '💣' : adjMine) : isMark ? '🚩' : ''}
		</StyledCell>
	);
}

export default Cell;
