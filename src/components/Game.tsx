import React, { Component } from 'react';
import styled from 'styled-components';
import Ground from './Ground';

const StyledGame = styled.div`
	margin-top: 30px;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

interface Props {
	level: number;
}

interface State {
	status: 'gaming' | 'fail' | 'win';
	mineSize: {
		width: number;
		height: number;
		count: number;
	};
}

export default class Game extends Component<Props, State> {
	constructor(props: Props) {
		super(props);
		this.state = {
			status: 'gaming',
			mineSize: { width: 10, height: 10, count: 10 }
		};
	}
	handleChangeStatus(type: 'win' | 'fail') {
		this.setState({ status: type });
		if (type == 'fail') {
			console.log(type);
		} else if (type == 'win') {
			console.log(type);
		}
	}
	render() {
		const groundProps = this.state.mineSize;
		return (
			<StyledGame>
				<Ground {...groundProps}></Ground>
			</StyledGame>
		);
	}
}
