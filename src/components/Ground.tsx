import React, { useEffect, useState, Component } from 'react';
import Cell from './Cell';

interface Props {
	width: number;
	height: number;
	count: number;
}
export default class Ground extends Component<Props, { size: string[][] }> {
	constructor(props: Props) {
		super(props);
		this.state = {
			size: []
		};
	}
	componentDidMount() {
		this.setState({ size: new Array(this.props.width).fill(new Array(this.props.height).fill('0')) as string[][] });
	}
	render() {
		const size = this.state.size;
		return (
			<div className="game-ground">
				{size.map((rowItem, rowIndex) => (
					<div key={rowIndex} className="row">
						{rowItem.map((colItem, colIndex) => (
							<Cell
								key={colIndex}
								row={rowIndex}
								col={colIndex}
								isMark={false}
								isOpen={true}
								isMine={true}
								adjMine={8}
							/>
						))}
					</div>
				))}
			</div>
		);
	}
}

/* export default function Ground(props: Props) {
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
 */
