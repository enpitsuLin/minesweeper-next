import React, { FunctionComponent, useEffect, useState } from 'react';
import Cell, { CellItem } from '../Cell';
import './style.scss';

interface Props {
	level: {
		totalMines: number;
		size: [number, number];
	};
}

type gameStatus = 'in-game' | 'game-over' | 'game-end';

const GameBoard: FunctionComponent<Props> = props => {
	const [mineMap, setMineMap] = useState<CellItem[][]>([]);
	const [mineCount, setMineCount] = useState({ opened: 0, marked: 0 });
	const [gameStatus, setGameStatus] = useState<gameStatus>('in-game');
	const [time, setTime] = useState(0);
	const [timeStr, setTimeStr] = useState('00:00');

	useEffect(() => {
		const timer = window.setInterval(() => {
			setTime(time.valueOf() + 1);
		}, 1000);
		return () => {
			clearInterval(timer);
		};
	}, []);

	useEffect(() => {
		generateMine();
	}, []);

	const generateMine = () => {
		const {
			totalMines,
			size: [height, width]
		} = props.level;

		const empty: boolean[] = new Array(width * height - totalMines).fill(false);
		const mines: boolean[] = new Array(totalMines).fill(true);

		let mineMap: Partial<CellItem>[][] = [];

		const shuffled = mines.concat(empty).sort(() => (Math.random() > 0.5 ? 1 : -1));

		for (let i = 0; i < shuffled.length; i += width) {
			const row = i / width;
			mineMap.push(shuffled.slice(i, i + width).map((isMine, index) => ({ row, col: index, isMine })));
		}
		for (let row = 0; row < height; row++) {
			for (let col = 0; col < width; col++) {
				const posMine = [
					[row - 1, col - 1],
					[row - 1, col],
					[row - 1, col + 1],

					[row, col - 1],
					[row, col + 1],

					[row + 1, col - 1],
					[row + 1, col],
					[row + 1, col + 1]
				];
				let adjMine = 0;

				for (let i = 0; i < 8; i++) {
					let _row = posMine[i][0];
					let _column = posMine[i][1];

					if (_row < 0 || _column < 0 || _row > height - 1 || _column > width - 1) {
						continue;
					}
					if (mineMap[_row][_column].isMine) {
						adjMine++;
					}
				}

				mineMap[row][col] = {
					row: row,
					col: col,
					adjMine: adjMine,
					isMine: mineMap[row][col].isMine,
					isOpen: false,
					isMark: false
				};
			}
		}
		setMineMap(mineMap as CellItem[][]);
	};

	const handleGameOver = () => {
		openAllCell();
	};
	const handleWin = () => {};
	const checkWin = () => {
		const {
			totalMines,
			size: [height, width]
		} = props.level;
		if (mineCount.opened + totalMines === height * width) {
			handleWin();
		}
	};
	/**
	 * 打开所有的Cell
	 */
	const openAllCell = () => {
		setMineMap(mineMap.map(row => row.map(col => ({ ...col, isOpen: true }))));
	};
	/**
	 * 处理Cell open
	 * @param row row
	 * @param col col
	 */
	const handleOpenCell = (row: number, col: number) => {
		const [height, width] = props.level.size;
		if (row < 0 || col < 0 || row > height - 1 || col > width - 1) return;
		const clickCell = mineMap[row][col];
		if (clickCell.isOpen) return;
		clickCell.isOpen = true;
		// 递归中会多次set 用函数式
		setMineCount((state: { opened: number; marked: number }) => ({
			opened: state.opened + 1,
			marked: state.marked
		}));
		checkWin();
		setMineMap(mineMap);
		if (clickCell.isMine === true) {
			handleGameOver();
			return;
		}
		if (clickCell.adjMine != 0) return;
		handleOpenCell(row - 1, col);
		handleOpenCell(row + 1, col);
		handleOpenCell(row, col - 1);
		handleOpenCell(row, col + 1);
	};
	/**
	 * 处理Cell mark
	 * @param row
	 * @param col
	 */
	const handleMarkCell = (row: number, col: number) => {
		const clickCell = mineMap[row][col];
		if (clickCell.isOpen) return;
		clickCell.isMark = !clickCell.isMark;
		setMineCount({ opened: mineCount.opened, marked: mineCount.marked + (clickCell.isMark ? +1 : -1) });
		setMineMap(mineMap);
	};

	return (
		<div className="game">
			<div className="game-board">
				{mineMap.map((rowItem, rowIndex) => (
					<div
						className="row"
						onContextMenu={e => {
							e.preventDefault();
						}}
						key={rowIndex}
					>
						{rowItem.map((colItem: CellItem, colIndex) => (
							<Cell
								key={`${rowIndex}-${colIndex}`}
								{...colItem}
								handleEvent={type => {
									if (type == 'open') {
										handleOpenCell(rowIndex, colIndex);
									}
									if (type == 'mark') {
										handleMarkCell(rowIndex, colIndex);
									}
								}}
							/>
						))}
					</div>
				))}
			</div>
		</div>
	);
};

export default GameBoard;
