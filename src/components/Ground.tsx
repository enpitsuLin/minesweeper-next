import React, { useEffect, useState } from 'react';
import Cell from './Cell';

interface Props {
	width: number;
	height: number;
	count: number;
}

export default function Ground(props: Props) {
	const [size, setSize] = useState([[]]);
	const { width, height, count } = props;
	useEffect(() => {
		setSize(new Array(width).fill(new Array(height).fill('0')));
	}, []);

	return (
		<div>
			{size.map((rowItem, rowIndex) => (
				<div key={rowIndex}>
					{rowItem.map((colItem, colIndex) => (
						<Cell key={colIndex} row={rowIndex} col={colIndex} isMark={false} isOpen={true} isMine={true} adjMine={8} />
					))}
				</div>
			))}
		</div>
	);
}
