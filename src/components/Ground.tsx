import React, { Component } from 'react';
import styled from 'styled-components';
import Cell, { CellItem } from './Cell';

const StyledGround = styled.div`
	margin: 32px;
	padding: 16px;
	border-radius: 8px;
	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: #fff;
	box-shadow: 1px 1px 14px;
`;

const StyledRow = styled.div`
	display: flex;
`;

interface Props {
	width: number;
	height: number;
	count: number;
}

export default class Ground extends Component<Props, { mineMap: CellItem[][] }> {
	constructor(props: Props) {
		super(props);
		this.state = {
			mineMap: []
		};
	}
	/**
	 * 生成雷区
	 * @returns mineMap
	 */
	generateMine() {
		const { width, height, count } = this.props;
		const empty: boolean[] = new Array(width * height - count).fill(false);
		const mines: boolean[] = new Array(count).fill(true);

		let mineMap: Partial<CellItem>[][] = [];

		const shuffled = mines.concat(empty).sort(() => (Math.random() > 0.5 ? -1 : 1));

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
		return mineMap;
	}
	openAllCell() {
		const mineMap = this.state.mineMap;
		this.setState({
			mineMap: mineMap.map(row => row.map(col => ({ ...col, isOpen: true })))
		});
	}
	componentDidMount() {
		const mineMap = this.generateMine();
		this.setState({
			mineMap: mineMap as CellItem[][]
		});
	}
	render() {
		const mineMap = this.state.mineMap;
		return (
			<>
				<button
					onClick={() => {
						this.openAllCell();
					}}
				>
					开启all
				</button>
				<StyledGround>
					{mineMap.map((rowItem, rowIndex) => (
						<StyledRow key={rowIndex}>
							{rowItem.map((colItem: CellItem, colIndex) => (
								<Cell
									key={`${rowIndex}-${colIndex}`}
									{...colItem}
									handleEvent={type => {
										if (type == 'open') {
											mineMap[rowIndex][colIndex].isOpen = true;
											this.setState({ mineMap });
										}
										if (type == 'mark') {
											mineMap[rowIndex][colIndex].isMark = !mineMap[rowIndex][colIndex].isMark;
											this.setState({ mineMap });
										}
									}}
								/>
							))}
						</StyledRow>
					))}
				</StyledGround>
			</>
		);
	}
}
