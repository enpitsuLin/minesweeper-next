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

export default class Game extends Component<Props, { width: number; height: number; count: number }> {
	constructor(props: Props) {
		super(props);
		this.state = {
			width: 10,
			height: 10,
			count: 10
		};
	}
	render() {
		const groundProps = this.state;
		return (
			<StyledGame>
				<Ground {...groundProps}></Ground>
			</StyledGame>
		);
	}
}
